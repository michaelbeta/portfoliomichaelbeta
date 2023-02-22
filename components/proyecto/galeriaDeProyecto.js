import React from 'react'
import Proyecto from "./tarjetaDeProyecto"
import Styled from "../../styles/proyecto/GaleriaDeProyectos.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faPython } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tecnolgias from "../../models/proyecto/tecnologiaUsadas";
import { Element } from 'react-scroll'
import ImagenProyecto1 from "../../images/proyecto/proyecto 1/Carrusel rectangular.png"
import ImagenProyecto2 from "../../images/proyecto/proyecto 2/Cartelera_peliculas.png"
import ImagenProyecto3 from "../../images/proyecto/proyecto 3/conversor.png"

const galeriaDeProyecto = () => {

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
                        tecnologiasImplementadas={Tecnolgias(["Nextjs", "css", "javascript"])}

                    />
                    <Proyecto
                        //Imagen
                        src={ImagenProyecto2}
                        alt="Cartelera"
                        width={550}
                        height={350}
                        //Info del proyecto
                        TituloProyecto={"Cartelera de películas"}
                        descripcion={"Cartelera de películas-Proyecto Final"}
                        icono1={<FontAwesomeIcon icon={faGithub} />}
                        url1={"https://github.com/michaelbeta/ProyectoFinal"}
                        icono2={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                        url2={"https://michaelbeta.github.io/ProyectoFinal/index.html"}
                        //Tecnologia iplementada
                        tecnologiasImplementadas={Tecnolgias(["css", "javascript"])}

                    />
                    <Proyecto
                        //Imagen
                        src={ImagenProyecto3}
                        alt="Conversor de bases"
                        width={550}
                        height={350}
                        //Info del proyecto
                        TituloProyecto={"Conversor de bases"}
                        descripcion={"Conversor de bases en python"}
                        icono1={<FontAwesomeIcon icon={faGithub} />}
                        url1={"https://github.com/michaelbeta/Conversor-de-bases-en-Python"}
                        icono2={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                        url2={""}
                        //Tecnologia iplementada
                        tecnologiasImplementadas={Tecnolgias(["python"])}
                    />
                </div>
            </section>
        </Element>

    )
}


export default galeriaDeProyecto;