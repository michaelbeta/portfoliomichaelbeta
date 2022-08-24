import React from 'react'
import FooterStyled from '../../styles/footer/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const footer = (props) => {

  const socialMedia = [faGithub, faLinkedin, faFacebook, faInstagram, faFigma];
  return (
    <footer className={FooterStyled.footer}>
      <section className={FooterStyled.datosDeContacto}>
        <ul>
          <li title='Número de telefono'>
            <FontAwesomeIcon icon={faMobile} />
            (+506)50142609
          </li>
          <li title='Correo'>
            <FontAwesomeIcon icon={faEnvelope} />
            betancourtmoran@gmail.com
          </li>
        </ul>
      </section >
      {socialMedia.map((item, key) =>
        <button key={key}>
          <a className={FooterStyled.Icon}>
            <FontAwesomeIcon icon={item} />
          </a>
        </button>)}
      <div className={FooterStyled.Creador}>
        <p title="Creador">Michael Betancourt - Desarrollador de Software</p>
      </div>
      <div className={FooterStyled.CopyRigth}>
        <p>©2020 - Créditos de la web</p>
      </div>

    </footer>

  )
}

export default footer