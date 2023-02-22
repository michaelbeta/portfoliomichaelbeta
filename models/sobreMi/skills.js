//Creamos la conexion a la carpeta
const reqSvgs = require.context ( '../../images/skills', true, /.svg$/ );
//
const noIncluir=["./python","./postgresql"];
//
//funcion que regresa los path y images
const svgMap =()=>{

  let pathSVG=[];
  const imagenesSVg=reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(path.lastIndexOf("http://localhost:3000/home/") + 1, path.lastIndexOf('.'))//path
    if(noIncluir.indexOf(key)==-1) pathSVG.push(key);//guardamos el path
    images[key] = reqSvgs(path).default//creamos la conexion al svg
    return images
  }, {})

return [imagenesSVg,pathSVG];
}; 



export default svgMap;