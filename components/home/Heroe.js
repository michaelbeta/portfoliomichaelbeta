import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Michael from "../../images/Beta.png";
import HeroeStyled from "../../styles/home/heroe.module.css";
import Image from "next/image";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Heroe = (props) => {


  return (
    <section title="Bienvenido" id={HeroeStyled.presentation}>
      <div className={HeroeStyled.heroe_container}>
        <div className={HeroeStyled.heroe_container_image}>
          <Image src={Michael}
            alt='Michael'
            width={250}
            height={250}
            layout='responsive'
            className={HeroeStyled.Yo}
            priority={true}
            loading="eager"
          />
        </div>
        <div className={HeroeStyled.heroe_container_inf}>
          <h1 className={HeroeStyled.heroe_container_title}>{props.titulo}</h1>
          <h2 className={HeroeStyled.heroe_container_subtitle}>{props.subtitulo}</h2>
          <p>{props.descripcion}</p>
          <div className={HeroeStyled.heroe_container_logo}>
            <a href="https://github.com/michaelbeta"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.facebook.com/michael.betancourt.39794/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/in/michael-betancourt-mora/"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Heroe