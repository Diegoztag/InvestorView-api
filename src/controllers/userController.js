'use strict';

import { createUser } from '../services/userServices.js';
import { createUserSchema } from '../schemas/userSchema';

// Crear nuevo usuario
export const createUserController = async (req, res) => {
    try {
        //Validamos info del user con joi
        const { error, value } = createUserSchema.validate(req.body);

        if (error) return res.status(400).json({ message: error.details[0].message });

        // Crear user llamando servicio correspondiente
        const newUser = await createUser(value);
        return res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creando usuario ', err);
        res.status(500).json({ message: 'Error interno del servidor '});
    }
}