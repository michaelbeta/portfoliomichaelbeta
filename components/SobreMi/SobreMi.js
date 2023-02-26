import React from 'react'
import Styled from '../../styles/SobreMi/SobreMi.module.css';
import Skills from "../../models/sobreMi/skills";
import { Element } from 'react-scroll'

const SobreMi = (props) => {

  const [images, path] = Skills();//Array module que contiene los svg de skills, el otro array son las direcciones de los svg
  let Svgs = path.map((path, key) => { return images[path] })//recorremos cada array y retornamos los svg completos
  //Craemos una lista de solo nombres de las imagenes
  const nombresDeImages = path.map((path) => { return path.toString().replace('./', '') });

  return (
    <Element id='SobreMi' name='SobreMi'>
      <section id={Styled.Container_SobreMi}>
        <div className={Styled.SobreMi_container}>
          <article className={Styled.SobreMi_container_info}>
            <h1 title="Sobre mi" className={Styled.SobreMi_container_titulo}>
              {props.TituloSobreMi}
            </h1>
            <div className={Styled.SobreMi_container_descripcion}>
              <p>{props.IntroADescripcion}</p>
              <p>{props.Descripcion}</p>
              <section className={Styled.Estudios}>
                <h2 className={Styled.EstudiosTitulo}>{props.Tituloestudios}</h2>
                <p>{props.estudios}</p>
              </section>
            </div>
          </article>
          {/*Experiencia laboral*/}
          <article className={Styled.ExperienciaLaboral_info}>
            <h1 title="Experiencia laboral" className={Styled.ExperienciaLaboral_titulo}>
              {props.TituloExperienciaLaboral}
            </h1>
            <div className={Styled.ExperienciaLaboral_Lista}>
              <div className={Styled.ExperienciaLaboral_Lista_1}>
                <h3>{props.ExperienciaLaboral_1_Puesto}</h3>
                <p><strong>{props.ExperienciaLaboral_1_Empresa}</strong></p>
                <p>{props.ExperienciaLaboral_1_Tiempo}</p>
                <p>{props.ExperienciaLaboral_1_Descripcion}</p>
              </div>
              <div className={Styled.ExperienciaLaboral_Lista_1}>
                <h3>{props.ExperienciaLaboral_2_Puesto}</h3>
                <p><strong>{props.ExperienciaLaboral_2_Empresa}</strong></p>
                <p>{props.ExperienciaLaboral_2_Tiempo}</p>
                <p>{props.ExperienciaLaboral_2_Descripcion}</p>
              </div>
            </div>
          </article>
          {/*SKILLS*/}
          <article className={Styled.Skills_container_info}>
            <h1 title="Habilidades" className={Styled.Skills_container_titulo}>
              {props.TituloSkills}
            </h1>
            <div className={Styled.Skills_container_lista}>
              {Svgs.map((Imagen, key) => {/*mostramos los svg */
                return <div key={key} >
                  <a title={nombresDeImages[key]}><Imagen propsdefautl="default" /></a>
                </div>
              })}
            </div>
          </article>
          {/*Idiomas*/}
          <article className={Styled.Idiomas_info}>
            <h1 title="Experiencia laboral" className={Styled.TituloIdiomas}>
              {props.TituloIdiomas}
            </h1>
            <p className={Styled.Idiomas_Lista}>
              {props.Lista_idiomas_1}
            </p>
            <p className={Styled.Idiomas_Lista}>
              {props.Lista_idiomas_2}
            </p>
          </article>
        </div>
      </section>
    </Element>

  )
}

export default SobreMi;