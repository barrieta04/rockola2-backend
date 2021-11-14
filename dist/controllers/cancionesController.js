"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCancion = exports.actualizarCancion = exports.agregarCancion = exports.obtenerCancion = exports.obtenerCanciones = void 0;
const mysql_service_1 = __importDefault(require("../Services/mysql.service"));
const obtenerCanciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)('SELECT * FROM canciones');
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null,
        };
        res.json(data); //esto se ejecuta cuando se ejecute la promesa asincrono sin await y async
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    /*executeQuery('SELECT * FROM canciones').then((response) => {
        res.json(response);
    }).catch((error)=> {
        res.status(500).send(error);
    });*/
});
exports.obtenerCanciones = obtenerCanciones;
const obtenerCancion = (req, res) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`SELECT * FROM canciones WHERE idcanciones = ${id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        };
        res.json(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
};
exports.obtenerCancion = obtenerCancion;
const agregarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, genero, artista } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO canciones (nombre, genero, artista) VALUES ('${nombre}','${genero}','${artista}')`);
        console.log(response);
        res.status(201).json({ menssage: 'created', id: response.insertId });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.agregarCancion = agregarCancion;
const actualizarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, genero, artista } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE canciones SET nombre ='${nombre}', genero = '${genero}', artista = '${artista}' WHERE idcanciones = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'updated' });
        }
        else {
            res.status(404).json({ message: `No existe registro con id: ${req.params.id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.actualizarCancion = actualizarCancion;
const eliminarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`DELETE FROM canciones WHERE idcanciones = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'deleted' });
        }
        else {
            res.status(404).json({ message: `No existe registro con id: ${req.params.id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.eliminarCancion = eliminarCancion;
//# sourceMappingURL=cancionesController.js.map