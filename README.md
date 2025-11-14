# Backend Estudiantes

API RESTful básica para la gestión de estudiantes usando Node.js, Express y MongoDB, con autenticación JWT y buenas prácticas de seguridad.

## Scripts

- `npm install` — instalar dependencias
- `npm run dev` — ejecutar en modo desarrollo con nodemon
- `npm start` — ejecutar en producción

Configura un archivo `.env` en la raíz con:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/estudiantesDB
JWT_SECRET=miclavejwt
SESSION_SECRET=unasecretobonito
NODE_ENV=development
```
