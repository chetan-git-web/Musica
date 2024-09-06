
import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
export default class UserController{
    signUp(req,res){
    const{name,email,password}=req.body;
    const user=UserModel.signUp(name,email,password);
    res.status(201).send(user);   
}

signIn(req,res){
    const result=UserModel.signIn(req.body.email,req.body.password);
   if(!result){
    return res.status(400).send('Incorrect credentials');
   }
else{
  const token=jwt.sign({
    userID:result.id,
    email:result.email,
  },
  'k0LYFoM1LLtPX22ogK6oXGxkHeeHJoGS',
  {
    expiresIn:'15d',
  }
);

return res.status(200).send(token);

}
}

}





