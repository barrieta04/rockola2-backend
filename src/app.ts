import express from 'express';
import cancionesRoutes from './routes/canciones';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

cancionesRoutes(app);

app.get('/prueba', async(req, res, next) =>{
    console.log('antes de la promesa');
    let x =10;
    const promesa= new Promise((resolve, reject) => {
        if (x == 10){
            resolve('promesa resuelta');
        }else{
            reject('promesa rechazada')
        }
    });

    await promesa.then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    });
    console.log('despues de la promesa')
      

    /*console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);*/

    res.status(200).json({nombre: "abril"});

    //res.status(401).send('Prueba del servidor');
}); //este get es una ruta


app.listen(port, ()=> {
    return console.log(`servidor corriendo sobre el puerto ${port}`)
});

console.log('pruebo');