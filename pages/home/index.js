import CardPresentation from "../../components/index/CardPresentation";
import PropTypes from "prop-types";
import SEO from "../../components/seo/SEO";
import ImageMichael from "../../images/beta_large.jpg";
import Layout from '../../components/layout/Layout';

const Home = (props) => {

  return (
    <div>
    <Layout>
    <SEO
        url={`${props.url}/home`}
        title="Michael Betancourt desarrollador de software - Portafolio"
        description="Contratar desarrollador de software - Junior Full Stack Developer, con facilidad para aprender, 
                con iniciativa, amable, con buenos valores y apasionado por el desarrollo de software.
                ¡Ven!, visita mi portafolio y conoce más sobre mis habilidades.
                Construyamos software escalable e intuitivo para el usuario
                ¡Si nunca me das la oportunidad no conoceré mi potencial!"
        image={`${props.url}/${ImageMichael}`}
        schemaType="article"
        openGraphType="website"
        icon="/beta_large.ico"
      />
    </Layout>
    
    </div>
  )
}
Home.propTypes = {
  url: PropTypes.string.isRequired,
};
export async function getServerSideProps (context) {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
export default Home;