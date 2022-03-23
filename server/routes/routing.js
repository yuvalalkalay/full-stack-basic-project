const BLL = require('../BLL/studentsBLL');
const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();

const app = express();
const port = 8080;


// app.listen(port,()=>{
//     console.log(`listen in port ${port}`);
// })

router.get('/', async (req,res)=>{
    try {
        const st = await BLL.getAll();
        res.send(st);
    } catch (error) {
            res.send(error);
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        res.send(await BLL.getBiId(id));
    } catch (error) {
        
    }
})

router.put('/:id', async(req,res)=>{

    try {
        const id = req.params.id;
        const obj = req.body;
        res.send(await BLL.update(id,obj));
    } catch (error) {
        res.send(error);
    }

})

router.post('/',async(req,res)=>{
    try {
        const obj = req.body;
        res.send(await BLL.createNewStudent(obj));
    } catch (error) {
        res.send(error);
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        res.send(await BLL.deleteStudent(id));
    } catch (error) {
        res.send(error);
    }
})
module.exports={
    router
}