import * as bunyan from 'bunyan';
import { configureMiddleware } from './lib/configure_middleware';
import { configureRoutes } from './lib/configure_routes';
import dotenv from 'dotenv';
import express from 'express';
import { startListening } from './lib/start_listening';
import { validateStartupVars } from './lib/validate_startup_vars';

dotenv.config();
const log = bunyan.createLogger({ name: 'boilerplate' });
const { port, staticDir } = validateStartupVars(process.env);

const app = express();
configureMiddleware(app);
configureRoutes(app, staticDir, log);
startListening(app, port, log);
