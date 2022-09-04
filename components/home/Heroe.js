import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Michael from "../../images/Beta_.png";
import HeroeStyled from "../../styles/home/heroe.module.css";
import Iconos from '../../models/footer/iconos'
import Image from "next/image";
import { Element } from 'react-scroll'

const Heroe = (props) => {


  return (
    <Element id='Home' name='Home'>
      <section id={HeroeStyled.Container_home}>
        <div className={HeroeStyled.heroe_container}>
          <div className={HeroeStyled.heroe_container_image}>
            <Image src={Michael}
              alt='Michael'
              width={650}
              height={650}
              layout='responsive'
              className={HeroeStyled.Yo}
              priority={true}
              loading="eager"
            />
          </div>
          <div className={HeroeStyled.heroe_container_inf}>
            <p title="saludo" className={HeroeStyled.heroe_container_saludo}>{props.saludo}</p>
            <h1 title="Titulo" className={HeroeStyled.heroe_container_title}>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            <div title="redes sociales" className={HeroeStyled.heroe_container_logo}>
              {Iconos.map((item, key) =>
                <button key={key}>
                  {key < Iconos.length - 1 &&
                    <a href={item[key, 0]}>
                      <FontAwesomeIcon icon={item[key, 1]} />
                    </a>}
                </button>
              )
              }
            </div>
          </div>
        </div>
      </section>

    </Element>


  )
}
export default Heroe