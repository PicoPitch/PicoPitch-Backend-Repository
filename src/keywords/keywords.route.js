import express from 'express';
import { deleteKeyword, addKeyword, updateKeyword } from '../keywords/keywords.controller.js';

export const keywordsRoute = express.Router();

keywordsRoute.delete('/', deleteKeyword)

keywordsRoute.post('/', addKeyword)

keywordsRoute.patch('/', updateKeyword)

