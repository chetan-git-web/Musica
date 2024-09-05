import React from 'react'
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {

    const form = useForm();
    const {register , handleSubmit} = form;

  return (  
    <div>
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
        })}>
            <input type="email" id="email"
            {
                ...register("email")
            } />
            <input type="submit" />
        </form>
    </div>
  )
}

export default ForgotPassword