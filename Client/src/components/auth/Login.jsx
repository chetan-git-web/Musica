import React from 'react'
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../configs/firebaseConfig';

const Login = () => {

  const loginFirebase = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  const form  = useForm();
  const {register,handleSubmit} = form;


  return (

    <div>
      <form onSubmit={handleSubmit(loginFirebase)}>
        <input type="email" id='email'
        {
          ...register("email")
        }
        />
        <input type="password" id='password'
        {
          ...register("password")
        }/>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Login





