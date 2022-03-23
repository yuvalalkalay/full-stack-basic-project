const mongoose = require('mongoose');
const DB = require('../DB/DB'); 

DB.connectDB();

const stSchema = new mongoose.Schema({
    fullName:String,
    Email:String,
    Faculty:String,
    BirthDate: String,
    grades:[
        {
            date: String,
            Grade: String
        }
    ]
})

module.exports = mongoose.model('Students',stSchema);





// const arr =[
//     {
//       fullName: 'noa ofnoa',
//       Email: 'blablddddda@gmail.com',
//       Faculty: 'rupin',
//       BirthDate: '2/3/1999',
//       Grades:[
//             {
//                 date:'12/8/2005',
//                 Grade:98
//             }
//             ]
//     },
//     {
//       fullName: 'yuval alkalay',
//       Email: 'blabla@gmail.com',
//       Faculty: 'tlv',
//       BirthDate: '2/3/20012',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'colt edry',
//       Email: 'coco@gmail.com',
//       Faculty: 'hit',
//       BirthDate: '4/8/2001',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'lolit',
//       Email: 'LOLa@gmail.com',
//       Faculty: 'rupin',
//       BirthDate: '12/12/1997',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'yuval cohen',
//       Email: 'yc@gmail.com',
//       Faculty: 'texsas uneversity',
//       BirthDate: '1/1/1999',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'rotem alfredo',
//       Email: 'www@kaki.com',
//       Faculty: 'rupin',
//       BirthDate:'25/5/2025',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'noam lazri',
//       Email: 'shlick@gmail.com',
//       Faculty: 'rupin',
//       BirthDate: '23/8/1985',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'yuval rbinovixh',
//       Email: 'slikonsek@gmail.com',
//       Faculty: 'mit',
//       BirthDate: '6/9/1999',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     },
//     {
//       fullName: 'itai cocoos',
//       Email: 'cocoos@gmail.com',
//       Faculty: 'haifa uneversity',
//       Grades:[
//         {date:'12/8/2005',
//         Grade:98}]
//     }
//   ]

//   const stmodel = mongoose.model('Student',stSchema)
//   stmodel.insertMany(arr);
