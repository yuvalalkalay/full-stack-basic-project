const DB = require('./server/DB/DB');
const express = require('express');
const router = require('./server/routes/routing');
const cors = require('cors');

const app = express();

const port = 8080;
app.use(cors());
app.use(express.json());
DB.connectDB();



app.use('/api/student',router.router);
app.listen(port,()=>{
    console.log(`listen in port ${port}`);
})
