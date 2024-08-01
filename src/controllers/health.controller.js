// health.controller.js

export const healthController = (req, res, next) => {
    res.status(200).send("HELLO, I'm Healthy!");
};