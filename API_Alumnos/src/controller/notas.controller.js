const { pool } = require("../database");
const mysql = require("mysql2");


const getMedia = async (req,res) => {
    try{
        let sql = `SELECT AVG ( mark ) AS media_alumno FROM marks WHERE student_id = ${req.query.id_students}`;
        
        let [result] = await pool.query(sql);
        res.send(result);
    }catch (error) {
        res.send(error);
    };    
};


const getApuntadas = async (req,res) => {   
    try{
        let sql;
        if( req.query.id_students == null){
            sql = `SELECT students.first_name, students.last_name, subjects.title FROM students INNER JOIN marks ON students.id_students = marks.student_id  INNER JOIN subjects ON marks.subject_id = subjects.id_subjects` ;
        } else {
            sql = `SELECT subjects.title FROM marks INNER JOIN subjects ON marks.subject_id = subjects.id_subjects WHERE marks.student_id = ${req.query.id_students} `;       
        }
        let [result] = await pool.query(sql);
        res.send(result);
    }catch (error) {
        console.log(error);
        res.send(error);
    };    
};

const getImpartidas = async (req,res) => {   
    try{
        let sql;
        if( req.query.id_teachers == null){
            sql = `SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.id_teachers = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id_subjects)` ;
        } else {
            sql = `SELECT subjects.title FROM subjects, subject_teacher, teachers WHERE teachers.id_teachers = subject_teacher.teacher_id AND subject_teacher.subject_id = subjects.id_subjects and teachers.id_teachers = ${req.query.id_teachers} `;       
        }
        let [result] = await pool.query(sql);
        res.send(result);
    }catch (error) {
        console.log(error);
        res.send(error);
    };    
};


module.exports = { getMedia, getApuntadas, getImpartidas }