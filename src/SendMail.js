import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button }  from '@material-ui/core';
import "./SendMail.css";
import { useForm } from "react-hook-form";

function SendMail() {
   
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (formData)=> {
         console.log (formData);
    };


    return (
        <div className = "sendMail">
            <div className = "sendMail_header">
                <h3>New message </h3>
                <CloseIcon className = "sendMail_close"/>
                </div>
                  

                <form onSubmit = {handleSubmit(onSubmit)}>
                    <input name = "to" placeholder="To"
                     type = "text"
                      className = "sendMail_to" {...register("to", { required: true })}  />
                       

                    <input name ='subject' placeholder ="Subject" 
                           type = "text"
                           className = "sendMail_subject" {...register('subject', { required: true })} />


                     <input  name = 'message' placeholder ="message" 
                             type = "text"
                             className = "sendMail__message" {...register('message', { required: true })} />

                  <div className = "sendMail_options">
                      <Button className = "sendMail_send"
                               variant="contained"
                               color="primary"
                               type="submit">send</Button>
                      </div>

                     </form>
            
            
        </div>
    );
}

export default SendMail;
