const student = require('../models/stModel');

//get all jsons
const getAll=()=>{
    return new Promise((resolve,reject)=>{
        student.find({},(err,st)=>{
            if(err){
                reject(err);
            }else{
                resolve(st);
            }
        })
    })
}
//get bi id
const getBiId = (id)=>{
    return new Promise((resolve,reject)=>{
        student.findById(id,(err,st)=>{
            if(err){
                reject(err);
            }else{
                resolve(st);
            }
        })
    })
}
//update
const update = (id,student2Update)=>{
    return new Promise((resolve,reject)=>{
        student.findByIdAndUpdate(id,student2Update,(err)=>{
            if (err) {
                reject(err);
            } else {
                resolve('update successfully');
            }
        })
    })
}

//create new student
const createNewStudent = (newStudent)=>{
    return new Promise((resolve,reject)=>{
        const Student = new student(newStudent);
        Student.save((err)=>{
            if(err){
                reject(err);
            }else{
                resolve('creat new student successfully');
            }
        });
    })
}
//delet student with id.
const deleteStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        student.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err);
            }else{
                resolve('student deleted successfully');
            }
        });
    })
}
module.exports={
    getAll,
    getBiId,
    update,
    createNewStudent,
    deleteStudent
}