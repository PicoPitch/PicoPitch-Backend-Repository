import express from 'express';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import { specs } from './config/swagger.config.js';
import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { healthRoute } from './src/health/health.route.js';
import commentRoute from './src/comment/comment.route.js';

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

const app = express();

// 서버 설정
app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/health', healthRoute);
app.use('/comments', commentRoute);

app.get('/', (req, res, next) => {
    res.send(response(status.SUCCESS, "루트 페이지!"));
});

// 기본 에러 핸들러 (404 Not Found)
app.use((req, res, next) => {
    res.status(status.NOT_FOUND).json({
        status: status.NOT_FOUND,
        isSuccess: false,
        code: 'NOT_FOUND',
        message: 'Endpoint not found'
    });
});

// 에러 처리 미들웨어
// 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err); // 콘솔에 에러를 출력합니다.

    // 상태 코드와 응답 메시지 설정
    const statusCode = typeof err.data?.status === 'number' ? err.data.status : status.INTERNAL_SERVER_ERROR.status;
    const responseMessage = typeof err.data?.message === 'string' ? err.data.message : 'Internal Server Error';

    // 응답 보내기
    res.status(statusCode).json({
        status: statusCode,
        isSuccess: false,
        code: 'ERROR',
        message: responseMessage
    });
});


app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});
