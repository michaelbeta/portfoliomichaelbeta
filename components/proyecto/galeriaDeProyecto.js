import React from 'react'
import Proyecto from "./tarjetaDeProyecto"
import Styled from "../../styles/proyecto/GaleriaDeProyectos.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tecnolgias from "../../models/proyecto/tecnologiaUsadas";
import { Element } from 'react-scroll'
import ImagenProyecto1 from "../../images/proyecto/proyecto 1/Carrusel rectangular.png"

const galeriaDeProyecto = () => {

    const nombresDeTecnologias = ["Nextjs", "css", "javascript"];
    const tecnologiasImplementadas = Tecnolgias(nombresDeTecnologias);
    return (
        <Element id='Projectos' name='Projectos'>
            <section id={Styled.galeriaDeProyectos}>
                <h1>Proyectos</h1>
                <div className={Styled.contenedorDeProyectos}>
                    <Proyecto
                        //Imagen
                        src={ImagenProyecto1}
                        alt="Carruseles"
                        width={550}
                        height={350}
                        //Info del proyecto
                        TituloProyecto={"Diseño de carruseles"}
                        descripcion={"Diseños de carruseles en 3D"}
                        icono1={<FontAwesomeIcon icon={faGithub} />}
                        url1={"https://github.com/michaelbeta/carrusel-en-next-js"}
                        icono2={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                        url2={"https://carrusel-en-next-js.vercel.app/"}
                        //Tecnologia iplementada
                        tecnologiasImplementadas={tecnologiasImplementadas}

                    />
                    <Proyecto
                        //Imagen
                        src={ImagenProyecto1}
                        alt="Carruseles"
                        width={550}
                        height={350}
                        //Info del proyecto
                        TituloProyecto={"Diseño de carruseles"}
                        descripcion={"Diseños de carruseles en 3D"}
                        icono1={<FontAwesomeIcon icon={faGithub} />}
                        url1={"https://github.com/michaelbeta/carrusel-en-next-js"}
                        icono2={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                        url2={"https://carrusel-en-next-jjmq15noj-michaelbeta.vercel.app/"}
                        //Tecnologia iplementada
                        tecnologiasImplementadas={tecnologiasImplementadas}

                    />
                </div>
            </section>
        </Element>

    )
}


export default galeriaDeProyecto;