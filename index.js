// index.js
import express from 'express';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { healthRoute } from './src/health/health.route.js';
import { boardRoute } from './src/board/board.route.js';
//import {UserRouter} from './src/routes/user.router.js';

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

const app = express();


app.set('port', process.env.PORT || 8080)   
app.use(cors());                            
app.use(express.static('public'));          
app.use(express.json());                    
app.use(express.urlencoded({ extended: false })); 

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));


app.use('/health', healthRoute);
app.use('/boards', boardRoute);


app.get('/', (req, res, next) => {
    res.send(response(status.SUCCESS, "루트 페이지!"));
});


// error handling
app.use((req, res, next) => {
    res.send(response(status.BAD_REQUEST, "Base Error"));
});

app.use((err, req, res, next) => {
    const errorData = err.data || { status: status.INTERNAL_SERVER_ERROR, message: err.message || "Internal Server Error" };

    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};

    console.error(err);

    res.status(errorData.status).send(response(errorData.status, errorData.message));
});


app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});