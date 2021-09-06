import express from 'express';
import dotenv from 'dotenv';
import { configureRoutes } from './lib/configure_routes';
import { configureMiddleware } from './lib/configure_middleware';
import { startListening } from './lib/start_listening';

dotenv.config();

const app = express();
configureMiddleware(app);
configureRoutes(app);
startListening(app, process.env.PORT);
