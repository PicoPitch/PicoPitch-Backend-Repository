// index.js
import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import { specs } from './config/swagger.config.js';
import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { healthRoute } from './src/health/health.route.js';
import { PresentationRoute } from './src/presentations/presentations.route.js';
import pool from './config/db.connect.js';

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

const app = express();

// server setting - veiw, static, body-parser etc..
app.set('port', process.env.PORT || 8080)   // 서버 포트 지정
app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/health', healthRoute);

app.use('/presentations', PresentationRoute);

app.get('/', (req, res, next) => {
    res.send(response(status.SUCCESS, "루트 페이지!"));
});

// error handling
app.use((req, res, next) => {
    res.send(response(status.BAD_REQUEST, "Base Error"));
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    console.error(err);
    res.status(statusCode).send({
        isSuccess: false,
        code: 'COMMON001',
        message: '잘못된 요청입니다.',
        result: 'Base Error',
    });
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});

(async () => {
    try {
        // 연결 테스트
        const connection = await pool.getConnection();
        console.log('Database connection successful');
        connection.release(); // 연결 해제
    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();