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
const express_1 = __importDefault(require("express"));
const canciones_1 = __importDefault(require("./routes/canciones"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, canciones_1.default)(app);
app.get('/prueba', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = {
        nombre: 'tatiana',
        apellido: 'albarracin',
        genero: 'femenino'
    };
    const nuevosDatos = Object.assign(Object.assign({}, datos), { ciudad: 'Bucaramanga', profesion: 'ing sistemas' });
    const { apellido, nombre } = datos;
    const arrayNumeros = [5, 1, 20, 7, 10, 45, 90];
    const mayor = Math.max(...arrayNumeros);
    res.status(200).json({ mayor });
    //res.status(401).send('Prueba del servidor');
})); //este get es una ruta
app.listen(config_1.default.PORT, () => {
    return console.log(`servidor corriendo sobre el puerto ${config_1.default.PORT}`);
});
console.log('pruebo');
//# sourceMappingURL=app.js.map