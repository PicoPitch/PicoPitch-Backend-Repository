
import express from 'express';
import {
    getPresentationsListController, deletePresentationController, updatePresentationTitleController,
    createPresentationController
} from './presentations.controller.js';

const router = express.Router();

router.get('/:userId', getPresentationsListController);

router.delete('/delete/:pptId', deletePresentationController);

router.patch('/update/:pptId', updatePresentationTitleController);

router.post('/create', createPresentationController);

export { router as PresentationRoute };
