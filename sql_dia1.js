
const mysql = require("mysql2/promise");

async function main() {
    
    try{
        let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Fer.123",
            database: "escuela"
        });
        console.log("Conexion correcta");
     
    // *********** RETO 1 ****************
    /* 
    // Añadir columna
    let columna = "ALTER TABLE escuela.direction ADD COLUMN directivo_auxiliar VARCHAR(45) NULL";
    let [res,data] =  await connection.query(columna);
        if(err){
            console.log(err)
        } else {
            console.log("Columna drectivo_auxiliar creada");
            console.log(result);
        };
    */

    /* 
    // Eliminar Tabla 
    let borrar = "DROP TABLE direction";
    let [result,data] = await connection.query(borrar);
    console.log("Tabla Eliminada");
    console.log(result);
     */

    /* 
    // Setear Notas
    let setear = "UPDATE marks SET mark = '0' ";
    let [result,data] = await connection.query(setear);
    console.log("Notas seteadas Exitosamente");
    console.log(result);
     */

    /* 
    // Obtener Nombre y Apellido de Estudiantes
    let mostrar = 'SELECT first_name, last_name FROM students';
    let[result,data] = await connection.query(mostrar);
    console.log("Datos Obtenidos correctamente");
    console.log(result);
    */
    
     /* 
    // Mostrar todos los profesores
    let mostrar = 'SELECT * FROM escuela.teachers';
    let[result,data] = await connection.query(mostrar);
    console.log("Datos Obtenidos correctamente");
    console.log(result);
     */

    // *********** RETO 2 ****************

    /* 
    // Eliminar Notas de mas de 10 años
    let deleteMark = "DELETE FROM marks WHERE date < '2013/12/31' ";
    let[result,data] = await connection.query(deleteMark);
    console.log("Eliminados correctamente");
    console.log(result);
    */

    // Actualiza Notas menores a 5, a valor 5.
    let corregir = "UPDATE marks SET mark = 5 WHERE  mark < 5 ";
    let [result,data] = await connection.query(corregir);
    console.log("Notas modificadas Exitosamente");
    console.log(result);
    

    }   

    catch(err){
        console.log(err)
        await connection.end();
    };
};





main();