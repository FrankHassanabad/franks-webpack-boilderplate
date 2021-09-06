import express, { Express } from 'express';
import { echo } from '../routes/echo';
import path from 'path';

export const configureRoutes = (app: Express) => {
  app.use('/', express.static(path.join(__dirname, '../../dist')));
  app.post('/api/echo', echo);
};
