'use strict';

import express from 'express';
import { createUserController } from '../controllers/userController.js';

const router = express.Router();

//Ruta para crear usuario nuevo
router.post('/create', createUserController);

export default router;