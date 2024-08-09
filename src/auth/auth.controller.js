// const authService = require('/auth.service');

// exports.kakaoCallback = (req, res) => {
//     authService.handleKakaoLogin(req.user)
//         .then(() => res.redirect('/'))
//         .catch(err => res.status(500).send('Internal Server Error'));
// };

// exports.logout = (req, res, next) => {
//     req.logout(err => {
//         if (err) return next(err);
//         res.redirect('/');
//     });
// };

import { userService } from "../auth/auth.service.js";
import { asyncWrap } from "../auth/auth.middleware.errorControl.js";

const signInKakao = asyncWrap(async (req, res) => {
    const headers = req.headers["authorization"];
    const kakaoToken = headers.split(" ")[1];

    const accessToken = await userService.signInKakao(kakaoToken);

    return res.status(200).json({ accessToken: accessToken });
});

export { signInKakao };