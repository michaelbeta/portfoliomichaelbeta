import PropTypes from "prop-types";
import SEO from "../../components/seo/SEO";
import ImageMichael from "../../images/Beta.png";
import Layout from '../../components/layout/Layout';
import Heroe from "../../components/home/Heroe";
import SobreMi from "../../components/SobreMi/SobreMi";
import ScrollToTop from "react-scroll-to-top";
import Proyectos from "../../components/proyecto/galeriaDeProyecto"
import ContactaMe from "../../components/contacto/contactaMe";

const Home = (props) => {

  return (
    <>
      <SEO
        url={`${props.url}/home`}
        title="Michael Betancourt desarrollador de software - Portafolio"
        description="Contratar desarrollador de software - Full Stack Developer, con facilidad para aprender, 
                con iniciativa, amable, con buenos valores y apasionado por el desarrollo de software.
                ¡Ven!, visita mi portafolio y conoce más sobre mis habilidades.
                Construyamos software escalable e intuitivo para el usuario
                ¡Si nunca me das la oportunidad no conoceré mi potencial!"
        image={`${props.url}/${ImageMichael.src}`}
        schemaType="article"
        openGraphType="website"
        icon="/beta.ico"
      />
      <Layout>
        <div className="container-fluid">
          <Heroe
            saludo={"¡Hola!👋 Mi nombre es"}
            titulo={"Michael Betancourt"}
            descripcion={" Soy un Desarrollador de Software, amante de las computadoras y de la programación." +
              " Actualmente trabajo para Pay Tech Solutions como programador."}
          />
          <SobreMi
            TituloSobreMi="Sobre mi"
            Descripcion="Soy un desarrollador de software que se está encaminando a ser full stack. Siempre busco estar constantemente practicando para ir puliendo mis habilidades.
            Además, siempre procuro aplicar las mejores prácticas a la hora de desarrollar, encaminándome a que el software sea fácil de mantener, escalable e intuitivo para el usuario.
            Comprendiendo que crear software va más allá de programar, por ello me esfuerzo mucho para lograr llegar a ser un excelente profesional."
            IntroADescripcion={"¡Hola!, bienvenido(a) a mi sitio web. Lo he creado con el fin de mostrar mis proyectos, habilidades y también para que conozcan un poco sobre mi."}
            TituloSkills="Habilidades"
            Tituloestudios={"Formación"}
            estudios={"En estos momentos me encuentro por finalizar el Bachillerato en Informática Empresarial en la UCR(Universidad de Costa Rica)."}
            TituloExperienciaLaboral={"Experiencia laboral"}
            ExperienciaLaboral_1_Puesto={"Desarrollador de software"}
            ExperienciaLaboral_1_Empresa={"Pay Tech Solutions"}
            ExperienciaLaboral_1_Tiempo={"09-2022 – actualmente"}
            ExperienciaLaboral_1_Descripcion={"• Analizo y corrijo errores reportados en los sistemas internos de la empresa y de los clientes corporativos, brindando soporte para la mejora de los sistemas."
              + "\n\n• Desarrollo tanto Back End como Front End para los diferentes sistemas internos de la empresa y de los clientes corporativos."}
            ExperienciaLaboral_2_Puesto={"Desarollador Front-end"}
            ExperienciaLaboral_2_Empresa={"LisTica/Pasante"}
            ExperienciaLaboral_2_Tiempo={"03-2022 – 08-2022"}
            ExperienciaLaboral_2_Descripcion={"• Implemente diferentes componentes a partir de los diseños presentados para el proyecto Smart CMS (Desarrollo de un sistema modular personalizable de gestión de contenidos para confección de páginas web), siendo estos reutilizables y dinámicos."}
            TituloIdiomas={"Idiomas"}
            Lista_idiomas_1={"• Inglés A2"}
            Lista_idiomas_2={"• Español nativo"}
          />
        </div>
        <Proyectos />
        <ContactaMe
          Titulo="Contáctame"
          Descripcion="Si deseas conocer más sobre mi o hablar de una oportunidad laboral, no dudes en contactarme."
        />
        <ScrollToTop smooth />
      </Layout>
    </>
  )
}
Home.propTypes = {
  url: PropTypes.string.isRequired,
};
export async function getServerSideProps(context) {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
export default Home;
