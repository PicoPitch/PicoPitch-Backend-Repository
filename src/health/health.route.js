// health.route.js

import express from "express";
import { healthController } from "./health.controller.js";

export const healthRoute = express.Router();

healthRoute.get('', healthController)