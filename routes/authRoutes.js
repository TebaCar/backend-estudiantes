const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');

router.post(
  '/registro',
  [
    body('correo').isEmail().withMessage('Correo inválido'),
    body('contraseña')
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener al menos 6 caracteres')
  ],
  authController.registrar
);

router.post(
  '/login',
  [
    body('correo').isEmail().withMessage('Correo inválido'),
    body('contraseña').notEmpty().withMessage('La contraseña es obligatoria')
  ],
  authController.login
);

module.exports = router;
