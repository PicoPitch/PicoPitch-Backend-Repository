
import express from 'express';
import { getPresentationsListController, deletePresentationController, updatePresentationTitleController } from './presentations.controller.js';

const router = express.Router();

router.get('/:userId', getPresentationsListController);

router.delete('/delete/:pptId', deletePresentationController);

router.patch('/update/:pptId', updatePresentationTitleController);

export { router as PresentationRoute };
