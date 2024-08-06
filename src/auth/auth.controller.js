const authService = require('/auth.service');

exports.kakaoCallback = (req, res) => {
    authService.handleKakaoLogin(req.user)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send('Internal Server Error'));
};

exports.logout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/');
    });
};