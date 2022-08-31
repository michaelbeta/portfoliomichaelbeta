import PropTypes from "prop-types";
import SEO from "../../components/seo/SEO";
import ImageMichael from "../../images/Beta.png";
import Layout from '../../components/layout/Layout';
import Heroe from "../../components/home/Heroe";

const Home = (props) => {

  return (
    <>
      <SEO
        url={`${props.url}/home`}
        title="Michael Betancourt desarrollador de software - Portafolio"
        description="Contratar desarrollador de software - Junior Full Stack Developer, con facilidad para aprender, 
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
            titulo={"¡Hola!👋"}
            subtitulo={"Mi nombre es Michael Betancourt"}
            descripcion={" Soy un Desarrollador de Software Junior, amante de las computadoras y de la programación."+
            " Me gusta jugar videojuegos, andar en bicicleta y aprender cosas nuevas"}
          />
        </div>
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