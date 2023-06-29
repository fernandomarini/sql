
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
        


        // ***************  RETO 1 *************************
       /*  
        // Nota madia de asiganatura 1
        let notaMedia = "SELECT AVG (mark) AS mediaMark FROM escuela.marks";
        let [result,data] = await connection.query(notaMedia);
        console.log("Notas media calculada Exitosamente");
        console.log(result);
        */

        /* 
        // Numero total de alumnos
        let totalAlumnos = "SELECT COUNT(id_students) AS cantAlumnos FROM escuela.students;";
        let [result,data] = await connection.query(totalAlumnos);
        console.log("Sumatoria Exitosa");
        console.log(result);
        */
        
        /* 
        // Listar campos tabla grupo
        let getGrupo = "SELECT * FROM grupos";
        let [result,data] = await connection.query(getGrupo);
        console.log("Listado de tabla Grupo Exitosamente");
        console.log(result);
        */

        /* 
        // Eliminar nitas > 5 y del 2022
        let filtroNota = "DELETE FROM marks WHERE ( mark > 5 ) AND ( date > '2022/01/01' AND date < '2023/01/01')";
        let [result,data] = await connection.query(filtroNota);
        console.log("Notas Eliminadas Exitosamente");
        console.log(result);
        */

        /* 
        // Datos Alumnos del año
        let selectYear = " SELECT * FROM students WHERE ingreso = '2023' ";
        let [result,data] = await connection.query(selectYear);
        console.log("Alumnos seleccionados correctamente");
        console.log(result);
        */

        
        // Calcular numero de docentes por asignatura    
        
        // Primero cargo los campos de la tabla subject_teacher

        /* 
        let carga = "INSERT INTO subject_teacher( subject_id, teacher_id, grupo_id )" + "VALUES (2, 2, 1 )";
        let [resul,dat] = await connection.query(carga);
        console.log("Carga de datos completa");
        console.log(resul);
        
        
        let docenteMateria = "SELECT subject_id, COUNT(*) AS docenteMateria FROM subject_teacher GROUP BY subject_id";
        let [result,data] = await connection.query(docenteMateria);
        console.log("Docentes calculados Exitosamente");
        console.log(result);
        */

        // ***************  RETO 2 *************************
        
        /* 
        // Obtener id y Nota de alumnos con id entre 1 y 20, o nota > 8 y fecha año 2022
        let filtroAlumnos = " SELECT student_id, mark FROM marks WHERE ( student_id BETWEEN 1 AND 20 ) OR ( mark > 8 AND date BETWEEN '2021/12/31' AND '2022/12/31' )";
        let [result,data] = await connection.query(filtroAlumnos);
        console.log("Seleccion de Alumnos Exitosa");
        console.log(result);
         */
        
        /* 
        // Media de Notas del ultimo año por materia
        let notaMediaLastYear = " SELECT AVG(mark), subject_id FROM marks WHERE (date BETWEEN '2021-12-31' AND '2022-12-31') GROUP BY subject_id  ";      
        let [result,data] = await connection.query(notaMediaLastYear);
        console.log("Media del ultimo año calculada con Exito");
        console.log(result);
        */

        /*
        // Nota Media ultimo año por alumno
        let notaMediaLastYear = " SELECT AVG(mark), student_id FROM marks WHERE (date BETWEEN '2021-12-31' AND '2022-12-31') GROUP BY student_id  ";
        let [result,data] = await connection.query(notaMediaLastYear);
        console.log("Media del ultimo año calculada con Exito");
        console.log(result);
        */

    }
   
    catch(err){
        console.log(err)
        await connection.end();
    };
};





main();