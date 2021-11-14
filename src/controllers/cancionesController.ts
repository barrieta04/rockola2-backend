
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
        console.log(error);
        res.status(500).send(error);
    } 
    /*executeQuery('SELECT * FROM canciones').then((response) => {
        res.json(response);
    }).catch((error)=> {
        res.status(500).send(error);
    });*/
}



const obtenerCancion = (req, res) => {
    const {id} = req.params;
    executeQuery(`SELECT * FROM canciones WHERE idcanciones = ${id}`).then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response [0]: null
        }
        res.json(data);
    }).catch((error)=> {
        console.log(error);
        res.status(500).send(error);
    });
     
}



const agregarCancion = async (req, res) => {
    const {nombre, genero, artista} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO canciones (nombre, genero, artista) VALUES ('${nombre}','${genero}','${artista}')`)
        console.log(response);
        res.status(201).json({menssage: 'created', id: response.insertId})
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}



const actualizarCancion = async (req, res) => {
    const {nombre, genero, artista} = req.body;
    try{
        const response = await executeQuery(`UPDATE canciones SET nombre ='${nombre}', genero = '${genero}', artista = '${artista}' WHERE idcanciones = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0){
            res.json({message: 'updated'});
        }else{
           res.status(404).json({message: `No existe registro con id: ${req.params.id}` }); 
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}



const eliminarCancion = async (req, res) => {
    try{
        const response = await executeQuery(`DELETE FROM canciones WHERE idcanciones = ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
           res.status(404).json({message: `No existe registro con id: ${req.params.id}` }); 
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

}

export {obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion}
