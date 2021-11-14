
import mysql from 'mysql2';
import config from '../config/config';

const getConnection = () =>{
    //crear conexion
    const connection = mysql.createConnection({
        database : config.DATABASE,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        host: config.DB_HOST,
        port: +config.DB_PORT // se coloca el + para convertir a numero
    });
    connection.connect((error) => {
        if(error){
            throw error;
        }else{
            console.log('conexion exitosa');
        }
    });
    return connection;
}


const executeQuery = (query: string): Promise<any> => {
    //ejecutar el query
    return new Promise((resolve, reject) => {
        try{
            const connection= getConnection();
            connection.query(query, (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }

            });
            connection.end();
        }catch(error){
            console.log(error);
            reject(error);
        }
    })
}

export default executeQuery;