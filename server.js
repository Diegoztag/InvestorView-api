'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

// Cargar variables de entorno archivo .env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(helmet()); // Mejora seguridad configurando varios headers http
app.use(morgan('dev')); // Para registrar solicitudes http en consola
app.use(express.json()); // Para convertir JSON en las solicitudes
app.use(cors()); // Para permitir peticiones entre diferentes rutas con dif puerto


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});