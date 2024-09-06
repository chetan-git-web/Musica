import express from "express";
import userRouter from "./routes/user.routes.js";
//server created
const server=express();
server.use(express.json());

server.use('/users', userRouter);

//default request
server.get('/',(req,res)=>{
    res.send('HEY!!! HELLO HELLO')
})
//port
server.listen(5000);
console.log('server is listening on 5000');
 
