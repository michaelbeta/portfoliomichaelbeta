import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const email = () => {

    const form = useRef();//Referenciamos el Dom
    const sendEmail = (e) => {//Metodo de EmailJS

        e.preventDefault();
        emailjs.sendForm("service_bfshls9",//serviceID,templateID,datos del form,key publica
        'template_qy7aw0d',form.current,
        '2yX4NT0QHMALbaLfQ').then((result)=>{//envia el correo
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset();
    }
    return [form,sendEmail]
}

export default email