import express, { response } from 'express';
import cancionesRoutes from './routes/canciones';
import config from './config/config';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

cancionesRoutes(app);

app.get('/prueba', async(req, res, next) =>{
    const datos = {
        nombre: 'tatiana',
        apellido:'albarracin',
        genero:'femenino'
    }
    
    const nuevosDatos ={
        ...datos,
        ciudad: 'Bucaramanga',
        profesion: 'ing sistemas'
    }
    const {apellido, nombre}= datos;
    const arrayNumeros = [5,1,20,7,10,45,90]
    const mayor = Math.max(...arrayNumeros);
    res.status(200).json({mayor});

    //res.status(401).send('Prueba del servidor');
}); //este get es una ruta


app.listen(config.PORT, ()=> {
    return console.log(`servidor corriendo sobre el puerto ${config.PORT}`)
});

console.log('pruebo');