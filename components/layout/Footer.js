import React from 'react'
import Iconos from '../../models/footer/iconos'
import FooterStyled from '../../styles/footer/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const footer = (props) => {
  return (
    <footer className={FooterStyled.footer}>
      <section className={FooterStyled.datosDeContacto}>
        <ul className={FooterStyled.list_datosDeContacto}>
          <li title='Número de telefono'>
          <FontAwesomeIcon icon={faMobile}/>
            <a href={props.telefono}>{props.telefono}</a> 
          </li>
          <li title='Correo'>
            <FontAwesomeIcon icon={faEnvelope}/>
            {props.correo}
          </li>
        </ul>
      </section >
      <section className={FooterStyled.socialMedia}>
        {Iconos.map((item, key) =>
          <button key={key}>
            <a href={item[key,0]}>
              <FontAwesomeIcon icon={item[key,1]} />
            </a>
          </button>
          )
          }
      </section>
      <div className={FooterStyled.Creador}>
        <p title="Creador">{props.creador}</p>
        <p><a href='/'>{props.derechos}</a></p>
      </div>
    </footer>

  )
}

export default footer