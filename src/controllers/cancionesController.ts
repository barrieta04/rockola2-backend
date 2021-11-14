
import { response } from "express";
import executeQuery from "../Services/mysql.service";

const obtenerCanciones = async (req, res) => {
    try {
        const response = await executeQuery('SELECT * FROM canciones');
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null,
        }
        res.json(data); //esto se ejecuta cuando se ejecute la promesa asincrono sin await y async
    }catch(error){
        res.status(500).send(error);
    } 
    /*executeQuery('SELECT * FROM canciones').then((response) => {
        res.json(response);
    }).catch((error)=> {
        res.status(500).send(error);
    });*/
}

const obtenerCancion = (req, res) => {
     res.send('obtener cancion desde el controlador')
}

const agregarCancion = (req, res) => {
     res.send('agregar cancion desde el controlador')
}

const actualizarCancion = (req, res) => {
    res.send('actualizar cancion desde el controlador')
}

const eliminarCancion = (req, res) => {
    res.send('eliminar cancion desde el controlador')
}

export {obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion}
