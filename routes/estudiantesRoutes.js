const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const auth = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

router.get('/', auth, estudiantesController.listar);
router.get('/:id', auth, estudiantesController.obtenerPorId);

router.post(
  '/',
  auth,
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('carrera').notEmpty().withMessage('La carrera es obligatoria'),
    body('edad')
      .isInt({ min: 15, max: 100 })
      .withMessage('La edad debe ser un número válido entre 15 y 100')
  ],
  estudiantesController.crear
);

router.put('/:id', auth, estudiantesController.actualizar);
router.delete('/:id', auth, estudiantesController.eliminar);

module.exports = router;
