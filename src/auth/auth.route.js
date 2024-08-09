// const express = require('express');
// const passport = require('passport');
// const authController = require('/auth.controller');

// const authRoute = express.Router();

// // 카카오 로그인 라우트
// authRoute.get('/kakao', passport.authenticate('kakao'));

// // 카카오 콜백 라우트
// authRoute.get('/kakao/callback',
//     passport.authenticate('kakao', { failureRedirect: '/login' }),
//     authController.kakaoCallback
// );

// // 로그아웃 라우트
// authRoute.get('/logout', authController.logout);

// module.exports = authRoute;

import express from "express";
import { signInKakao } from "../auth/auth.controller.js";

export const authRoute = express.Router();

authRoute.post('/kakao/signin', signInKakao);