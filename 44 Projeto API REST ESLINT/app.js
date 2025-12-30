import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js';
import './src/database/index.js';

class App {
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  setupRoutes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
