import React from 'react'
import Styled from "../../styles/proyecto/Proyecto.module.css";
import Image from "next/image";
import Tecnolgias from "../../models/proyecto/tecnologiaUsadas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

const proyectos = (props) => {

  return (
    <div className={Styled.proyecto}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout='responsive'
        className={Styled.imagenProyecto}
        priority={true}
        loading="eager"
      />
      <div className={Styled.descripcionProyecto}>
        <h3>{props.TituloProyecto}</h3>
        <p>{props.descripcion}</p>
        <div className={Styled.LinkIconos}>
          <a href={props.url1}>{props.icono1}</a>
          <a href={props.url2}>{props.icono2}</a>
        </div>
      </div>
      <div className={Styled.iconosDeTecnologias}>
        {props.tecnologiasImplementadas.map((Imagen, key) => {/*mostramos los svg */
          return <div key={key} >
            <a title={props.nombresDeTecnologias[key]}><Imagen propsdefautl="default" /></a>
          </div>
        })}
      </div>
    </div>
  )
}
/*Tecnologias implementadas por default para el props */
const nombresDeTecnologiasParaProps = ["css", "html", "javascript"];
const tecnologiasImplementadasParaProps = Tecnolgias(nombresDeTecnologiasParaProps);

proyectos.defaultProps = {
  src: "/No_image.svg",
  alt: "No hay imagen",
  width: "450",
  height: "350",
  nombresDeTecnologias:nombresDeTecnologiasParaProps,
  tecnologiasImplementadas:tecnologiasImplementadasParaProps,
  url1:"https://github.com/michaelbeta",
  icono1:<FontAwesomeIcon icon={faGithub}/>,
  url2:"https://www.linkedin.com/in/michael-betancourt-mora/",
  icono2:<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
};
export default proyectos