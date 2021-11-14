"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionesController_1 = require("../controllers/cancionesController");
const cancionesRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerCanciones', cancionesController_1.obtenerCanciones);
    router.get('/obtenerCancion/:id', cancionesController_1.obtenerCancion);
    router.post('/agregarCancion', cancionesController_1.agregarCancion);
    router.put('/actualizarCancion/:id', cancionesController_1.actualizarCancion);
    router.delete('/eliminarCancion/:id', cancionesController_1.eliminarCancion);
};
exports.default = cancionesRoutes;
//# sourceMappingURL=canciones.js.map