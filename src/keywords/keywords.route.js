import express from 'express';
import { deleteKeyword } from '../keywords/keywords.controller.js';

export const keywordsRoute = express.Router();

keywordsRoute.delete('/', deleteKeyword)

