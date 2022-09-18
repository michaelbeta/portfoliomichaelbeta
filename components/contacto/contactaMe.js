import React from 'react'
import { Element } from 'react-scroll'
import Styled from '../../styles/contactaMe/contactaMe.module.css'
import Email from '../../hooks/contactaMe/email'

const contactaMe = (props) => {

    const [form,sendEmail]=Email();
    
    return (
        <Element id='Contacto' name='Contacto'>
            <section id={Styled.contactaMe}>
                <div className={Styled.contactaMe_container}>
                    <h1 className={Styled.contactaMe_titulo}>{props.Titulo}</h1>
                    <p className={Styled.contactaMe_descripcion}>{props.Descripcion}</p>
                    <div className={Styled.contactaMe_Correo}>
                        <form className={Styled.form} ref={form} onSubmit={sendEmail}>
                            <input 
                            type="text" 
                            placeholder='Su nombre' 
                            name="nombre" 
                            required
                            />
                            <input 
                            type="email" 
                            placeholder='Su correo' 
                            name="correo" 
                            required
                            />
                            <input 
                            type="text" 
                            placeholder='Asunto' 
                            name="Asunto" 
                            required
                            />
                            <textarea 
                            name="mensaje" 
                            placeholder='Mensaje'
                            /*cols="30" rows="10"*/
                            required
                            />
                            <button type="submit" className={Styled.contactaMe_Enviar}>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </Element>

    )
}

export default contactaMe