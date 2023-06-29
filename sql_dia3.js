
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
        // Nombre y Apellido de alumnos + nombre de asignatura
        /*     
        let sqlSerch = " SELECT first_name, last_name, title FROM students JOIN marks ON ( students.id_students = marks.student_id ) JOIN subjects ON ( marks.subject_id = subjects.id_subjects )";
        let [result,data] = await connection.query(sqlSerch);
        console.log("Busqueda Exitosamente");
        console.log(result);
        */

        // ***************  RETO 2 *************************
        // Nombre y Apellido docente + nombre asignatura que imarten
        /* 
        let sqlSerch = " SELECT first_name, last_name, title FROM teachers JOIN subjects ON ( teachers.id_teachers = subjects.id_subjects ) ";
        let [result,data] = await connection.query(sqlSerch);
        console.log("Busqueda Exitosamente");
        console.log(result);
        */

        // ***************  RETO 3 *************************                  ############################################## NO FUNCIONA ############################################
        // Numero total alumnos por asignatura, nombre asignatura + nombre y apellido de docente 
        // let sqlSerch = " SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT(students.id_students) FROM students JOIN subject_teacher ON (students.grupo_id = subject_teacher.grupo_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id_subjects) JOIN teachers ON (subject_teacher.teacher_id = teachers.id_teachers) GROUP BY subjects.title";
        let sqlSerch = " SELECT subjects.title, COUNT(students.id_students), teachers.first_name, teachers.last_name FROM students JOIN subject_teacher ON (students.grupo_id = subject_teacher.grupo_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id_subjects) JOIN teachers ON (subject_teacher.teacher_id = teachers.id_teachers) GROUP BY subjects.title";

        
        let [result,data] = await connection.query(sqlSerch);
        console.log("Busqueda Exitosamente");
        console.log(result);

    }
    
    catch(err){
        console.log(err)
        await connection.end();
    };

};


/* dia 3 - reto 3

SELECT escuela.subjects.title, escuela.teachers.first_name, escuela.teachers.last_name, COUNT(escuela.students.id_students) 
FROM escuela.students JOIN escuela.subject_teacher ON (escuela.students.grupo_id = escuela.subject_teacher.grupo_id)
 JOIN escuela.subjects ON (escuela.subject_teacher.subject_id = escuela.subjects.id_subjects) 
 JOIN escuela.teachers ON (escuela.subject_teacher.teacher_id = escuela.teachers.id_teachers) 
 GROUP BY escuela.subjects.title;

*/


main();