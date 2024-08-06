// index.js
import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import { specs } from './config/swagger.config.js';
import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { healthRoute } from './src/health/health.route.js';
import { authRoute } from './src/auth/auth.route.js'; // Assuming you have an auth route
const KakaoStrategy = require('passport-kakao').Strategy;

dotenv.config(); // Load environment variables from .env file

const app = express();

// Server settings - view, static, body-parser, etc.
app.set('port', process.env.PORT || 8080); // Set server port
app.use(cors()); // Enable CORS
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

// Session and Passport configuration
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use 'true' if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());

// Swagger documentation
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// Routes
app.use('/auth', authRoute);
app.get('/auth-ok', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`<h1>Hello ${req.user.username}!</h1><a href="/auth/logout">Logout</a>`);
    } else {
        res.send('<h1>Home</h1><a href="/auth/kakao">Login with Kakao</a>');
    }
});

// 환경 변수 설정
const KAKAO_CLIENT_ID = 'YOUR_KAKAO_CLIENT_ID';
const KAKAO_CLIENT_SECRET = 'YOUR_KAKAO_CLIENT_SECRET'; // 필요시 사용
const KAKAO_CALLBACK_URL = 'http://localhost:3000/auth/kakao/callback';

// Passport 전략 설정
passport.use(new KakaoStrategy({
    clientID: KAKAO_CLIENT_ID,
    clientSecret: KAKAO_CLIENT_SECRET, // 필요시 사용
    callbackURL: KAKAO_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // 사용자 정보와 토큰을 이용한 처리
        return done(null, profile);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.use('/health', healthRoute);

app.get('/', (req, res, next) => {
    res.send(response(status.SUCCESS, "Root page!"));
});

// Error handling
app.use((req, res, next) => {
    res.status(404).send(response(status.BAD_REQUEST, "Base Error"));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    console.error(err);
    res.status(err.status || status.INTERNAL_SERVER_ERROR).send(response(err.status || status.INTERNAL_SERVER_ERROR, err.message));
});

// Start server
app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});
