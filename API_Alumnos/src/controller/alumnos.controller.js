const { pool } = require("../database");
const mysql = require("mysql2");

const getAlumno = async (req,res) => {
    try{
        let sql;
        if( req.query.id_students == null){
            sql = 'SELECT * FROM students';
        } else {
            sql = `SELECT * FROM students WHERE id_students = ${req.query.id_students}`;
        }
        let [result] = await pool.query(sql);
        res.send(result);
    }catch (error) {
        res.send(error);
    };    
};


const postAlumno = async (req, res) => {    
    const {first_name, last_name, grupo_id, ingreso} = req.body;
    const params = [ first_name, last_name, grupo_id, ingreso ];
    try{       
        let sql = `INSERT INTO students ( first_name, last_name, grupo_id, ingreso ) VALUES (?, ?, ?, ? )`;  
        const [result] = await pool.query(sql, params);
        res.send(result);      
    }catch (error){
        res.send(error);
    };
};


const putAlumno = async (req, res) => {    
    const {id_students, first_name, last_name, grupo_id, ingreso} = req.body;
    const params = [    first_name?     first_name: null,
                        last_name?      last_name: null,
                        grupo_id?       grupo_id: null,
                        ingreso?        ingreso: null,
                        parseInt(id_students)
                    ];    
    try{  
        let sql = "UPDATE students SET  first_name = COALESCE( ?, first_name ), last_name = COALESCE( ?, last_name ), grupo_id = COALESCE( ?, grupo_id ), ingreso = COALESCE( ?, ingreso ) WHERE id_students =  ? ";   
        const [result] = await pool.query(sql, params);
        res.send(result); 
    }catch (error){
        res.send(error);
    };
};


const deleteAlumno = async (req, res) => {      
    const { id_students } = req.body;
    const params = [ id_students ];    
    try{  
        let sql = "DELETE FROM students WHERE id_students =  ? ";   
        const [result] = await pool.query(sql, params);
        res.send(result); 
    }catch (error){
        res.send(error);
    };
};


module.exports = { getAlumno, postAlumno, putAlumno, deleteAlumno };
