
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
      


    }
   
    catch(err){
        console.log(err)
        await connection.end();
    };
};





main();