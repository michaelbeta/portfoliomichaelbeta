const tecnologiasQueUsa = (props) => {

    //Creamos la conexion a la carpeta
    const reqSvgs = require.context('../../images/skills', true, /.svg$/);

    let pathSVG = [];//array que guardará las direcciones
    //funcion que regresa los images
    const imagenesSVg = reqSvgs.keys().reduce((images, path) => {
        const key = path.substring(path.lastIndexOf("http://localhost:3000/home/") + 1, path.lastIndexOf('.'))//path
        pathSVG.push(key);//guardamos el path
        images[key] = reqSvgs(path).default//creamos la conexion al svg
        return images
    }, {})
    const images = imagenesSVg;
    let Svgs = pathSVG.map((path, key) => { return images[path] })//recorremos el svgMpa y retornamos los svg completos
    //Creamos una lista de solo nombres de las imagenes
    const nombresDeImages = pathSVG.map((path, key) => { return path.toString().replace('./', '') });

    const nombresDeImagesMayuscalas = nombresDeImages.map(element => {
        return element.toUpperCase();
    });
    //Seleccionamos solo los svg que se indico con el props
    const ObtenerLosSvgNecesarios = Svgs.reduce((result, svg, index) => {
        props.map(element => {
            if (element.toUpperCase() === nombresDeImagesMayuscalas[index]) {result.push(svg);}
        });

        return result;

    }, []);


    return ObtenerLosSvgNecesarios;
}
//return result.push(svg);

export default tecnologiasQueUsa;