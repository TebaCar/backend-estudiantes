const Estudiante = require('../models/Estudiante');
const { validationResult } = require('express-validator');

exports.listar = async (req, res) => {
  try {
    const lista = await Estudiante.find();
    res.json(lista);
  } catch (error) {
    console.error('Error al listar estudiantes:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

exports.obtenerPorId = async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  } catch (error) {
    console.error('Error al obtener estudiante:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

exports.crear = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }

    const estudiante = new Estudiante(req.body);
    await estudiante.save();
    res.status(201).json(estudiante);
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }

    res.json(estudiante);
  } catch (error) {
    console.error('Error al actualizar estudiante:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }

    res.json({ mensaje: 'Estudiante eliminado' });
  } catch (error) {
    console.error('Error al eliminar estudiante:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
};
