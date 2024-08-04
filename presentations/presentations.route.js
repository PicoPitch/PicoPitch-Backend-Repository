
import express from 'express';
import { getPresentationsListController } from './presentations.controller.js'; // 상대 경로 수정

const router = express.Router();

router.get('/:userId', getPresentationsListController);


export { router as PresentationRoute };
