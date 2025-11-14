const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    carrera: {
      type: String,
      required: true,
      trim: true
    },
    edad: {
      type: Number,
      min: 15,
      max: 100,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Estudiante', estudianteSchema);
