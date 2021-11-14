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
    console.log('antes de la promesa');
    let x = 10;
    const promesa = new Promise((resolve, reject) => {
        if (x == 10) {
            resolve('promesa resuelta');
        }
        else {
            reject('promesa rechazada');
        }
    });
    const response = yield promesa.then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    });
    console.log('despues de la promesa');
    /*console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);*/
    res.status(200).json({ nombre: "abril" });
    //res.status(401).send('Prueba del servidor');
})); //este get es una ruta
app.listen(config_1.default.PORT, () => {
    return console.log(`servidor corriendo sobre el puerto ${config_1.default.PORT}`);
});
console.log('pruebo');
//# sourceMappingURL=app.js.map