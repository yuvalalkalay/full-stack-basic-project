const mongoose = require('mongoose');
const { stringify } = require('querystring');

const connectDB = ()=>{
const url ='mongodb+srv://yuval_alkalay:1234@cluster0.78vvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const option={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,option);
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

module.exports={
    connectDB
}