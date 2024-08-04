
import express from 'express';
import { getPresentationsListController, deletePresentationController } from './presentations.controller.js';

const router = express.Router();

router.get('/:userId', getPresentationsListController);

router.delete('/delete/:pptId', deletePresentationController);

export { router as PresentationRoute };
