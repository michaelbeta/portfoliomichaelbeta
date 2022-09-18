import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const email = () => {

    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm("service_bfshls9",
        'template_qy7aw0d',form.current,
        '2yX4NT0QHMALbaLfQ').then((result)=>{

            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset();
    }
    return [form,sendEmail]
}

export default email