
const obtenerCanciones = (req, res) => {
    res.send('obtener canciones desde el controlador')
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
