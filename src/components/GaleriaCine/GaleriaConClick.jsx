import { useState } from "react";
import foto1 from './images/1.jpg'
import foto2 from './images/2.jpg'
import foto3 from './images/3.jpg'
import foto4 from './images/4.jpg'
import foto5 from './images/5.jpg'
import foto6 from './images/6.jpg'
import foto7 from './images/7.jpg'
import foto8 from './images/8.jpg'
import foto9 from './images/9.jpg'
import foto10 from './images/10.jpg'
import foto11 from './images/11.jpg'
import foto12 from './images/12.jpg'
import foto13 from './images/13.jpg'
import foto14 from './images/14.jpg'
import foto15 from './images/15.jpg'
import foto16 from './images/16.jpg'
import foto17 from './images/17.jpg'
import foto18 from './images/18.jpg'
import foto19 from './images/19.jpeg'
import foto20 from './images/20.jpg'
import foto21 from './images/21.jpg'
import foto22 from './images/22.jpg'
import foto23 from './images/23.jpg'
import foto24 from './images/24.jpg'
import foto25 from './images/25.jpg'
import foto26 from './images/26.jpeg'
import foto27 from './images/27.jpeg'
import foto28 from './images/28.jpg'
import foto29 from './images/29.jpg'
import foto30 from './images/30.jpg'
import foto31 from './images/31.jpg'
import foto32 from './images/32.jpg'
import foto33 from './images/33.jpg'
import foto34 from './images/34.jpg'
import foto35 from './images/35.jpg'
import foto36 from './images/36.jpg'
import foto37 from './images/37.jpg'
import foto38 from './images/38.jpg'
import foto39 from './images/39.jpg'
import foto40 from './images/40.jpg'
import foto41 from './images/41.jpg'
import foto42 from './images/42.jpg'
import foto43 from './images/43.jpg'
import foto44 from './images/44.jpg'
import foto45 from './images/45.jpeg'
import foto46 from './images/46.jpeg'
import foto47 from './images/47.jpeg'
import foto48 from './images/48.jpeg'
import foto49 from './images/49.jpeg'
import foto50 from './images/50.jpeg'
import foto51 from './images/51.jpg'
import foto52 from './images/52.jpg'
import foto53 from './images/53.jpg'
import foto54 from './images/54.jpg'
import foto55 from './images/55.jpg'
import foto56 from './images/56.jpg'
import foto57 from './images/57.jpg'
import foto58 from './images/58.jpeg'
import foto59 from './images/59.jpg'
import foto60 from './images/60.jpg'
import foto61 from './images/61.jpg'
import foto62 from './images/62.jpg'
import foto63 from './images/63.jpg'
import foto64 from './images/64.jpeg'
import foto65 from './images/65.jpeg'
import foto66 from './images/66.jpeg'
import foto67 from './images/67.jpeg'
import foto68 from './images/68.jpeg'
import foto69 from './images/69.jpeg'
import foto70 from './images/70.jpg'
import foto71 from './images/71.jpg'
import foto72 from './images/72.jpg'
import foto73 from './images/73.jpg'
import foto74 from './images/74.jpg'
import foto75 from './images/75.jpg'
import foto76 from './images/76.jpg'
import foto77 from './images/77.jpg'
import foto78 from './images/78.jpg'
import foto79 from './images/79.jpg'
import foto80 from './images/80.jpg'
import foto81 from './images/81.jpg'
import foto82 from './images/82.jpg'
import foto83 from './images/83.jpg'
import foto84 from './images/84.jpg'
import foto85 from './images/85.jpg'
import foto86 from './images/86.jpg'
import foto87 from './images/87.jpg'
import foto88 from './images/88.jpg'




import "./Galeria.css";

function GaleriaConClick() {

  const [galeriaActiva, setGaleriaActiva] = useState(null);

  const toggleGaleria = (id) => {
    setGaleriaActiva((prev) => (prev === id ? null : id));
  };

  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const abrirImagen = (src) => {
    setImagenAmpliada(src);
  };

  const cerrarImagen = () => {
    setImagenAmpliada(null);
  };

  // const [mostrarGaleria, setMostrarGaleria] = useState(false);

  // const toggleGaleria = () => {
  //   setMostrarGaleria(!mostrarGaleria);
  // };

  // const [mostrarGaleria2, setMostrarGaleria2] = useState(false);

  // const toggleGaleria2 = () => {
  //   setMostrarGaleria2(!mostrarGaleria2);
  // };
  
  // const [mostrarGaleria3, setMostrarGaleria3] = useState(false);

  // const toggleGaleria3 = () => {
  //   setMostrarGaleria3(!mostrarGaleria3);
  // };

  // const [mostrarGaleria4, setMostrarGaleria4] = useState(false);

  // const toggleGaleria4 = () => {
  //   setMostrarGaleria4(!mostrarGaleria4);
  // };

  // const [mostrarGaleria5, setMostrarGaleria5] = useState(false);

  // const toggleGaleria5 = () => {
  //   setMostrarGaleria5(!mostrarGaleria5);
  // };

  // const [mostrarGaleria6, setMostrarGaleria6] = useState(false);

  // const toggleGaleria6 = () => {
  //   setMostrarGaleria6(!mostrarGaleria6);
  // };

  // const [mostrarGaleria7, setMostrarGaleria7] = useState(false);

  // const toggleGaleria7 = () => {
  //   setMostrarGaleria7(!mostrarGaleria7);
  // };

  return (
    <div className="carddiseño">

    <div className="contenedorcards">
      <div className={`contenedorcard ${galeriaActiva === "1" ? "activa" : ""}`}>
              <img
        src={foto7}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("1")}
      />

        <h3 className='titulocard'>Diseño de Cine</h3>
        <p className='parrafocard'> La ambientación de cada detalle de la 
                escenografía y el decorado de todo el set
        </p>
      </div>

          <div className={`contenedorcard ${galeriaActiva === "2" ? "activa" : ""}`}>
              <img
        src={foto23}
        alt="principal"
        className="fotocard"
        // onClick={toggleGaleria2}
        onClick={() => toggleGaleria("2")}
      />

        <h3 className='titulocard'>Construcciones Permanentes</h3>
        <p className='parrafocard'> Decoración de espacios permanentes</p>
        
      </div>
      <div className={`contenedorcard ${galeriaActiva === "3" ? "activa" : ""}`}>
              <img
        src={foto29}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("3")}
      />

        <h3 className='titulocard'>Eventos</h3>
        <p className='parrafocard'>Todo el decorado de la producción de tu evento
        </p>
      </div>

          <div className={`contenedorcard ${galeriaActiva === "4" ? "activa" : ""}`}>
              <img
        src={foto56}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("4")}
      />

        <h3 className='titulocard'>Publicidades</h3>
        <p className='parrafocard'> Para que tus clientes vean lo que tu ves
        </p>
        
      </div>
      <div className={`contenedorcard ${galeriaActiva === "5" ? "activa" : ""}`}>
              <img
        src={foto61}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("5")}
      />

        <h3 className='titulocard'>Series</h3>
        <p className='parrafocard'> Desarrollo constante en el set de filmación
        </p>
      </div>

          <div className={`contenedorcard ${galeriaActiva === "6" ? "activa" : ""}`}>
              <img
        src={foto82}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("6")}
      />

        <h3 className='titulocard'>Teatro</h3>
        <p className='parrafocard'> La ambientación de cada detalle de la 
                Escenografía y decorado de puesta en escena
        </p>
        
      </div>
      <div className={`contenedorcard ${galeriaActiva === "7" ? "activa" : ""}`}>
              <img
        src={foto84}
        alt="principal"
        className="fotocard"
        onClick={() => toggleGaleria("7")}
      />

        <h3 className='titulocard'>TV</h3>
        <p className='parrafocard'> Decorado de todo el set de filmación
        </p>
      </div>

      </div>
      <div className={`galeria ${galeriaActiva === "1" ? "abierta" : ""}`}>
        <img src={foto1} className="miniatura" onClick={() => abrirImagen(foto1)} />
        <img src={foto2} className="miniatura" onClick={() => abrirImagen(foto2)} />
        <img src={foto3} className="miniatura" onClick={() => abrirImagen(foto3)} />
        <img src={foto4} className="miniatura" onClick={() => abrirImagen(foto4)} />
        <img src={foto5} className="miniatura" onClick={() => abrirImagen(foto5)} />
        <img src={foto6} className="miniatura" onClick={() => abrirImagen(foto6)} />
        <img src={foto7} className="miniatura" onClick={() => abrirImagen(foto7)} />
        <img src={foto8} className="miniatura" onClick={() => abrirImagen(foto8)} />
        <img src={foto9} className="miniatura" onClick={() => abrirImagen(foto9)} />
        <img src={foto10} className="miniatura" onClick={() => abrirImagen(foto10)} />
        <img src={foto11} className="miniatura" onClick={() => abrirImagen(foto11)} />
        <img src={foto12} className="miniatura" onClick={() => abrirImagen(foto12)} />
        <img src={foto13} className="miniatura" onClick={() => abrirImagen(foto13)} />
        <img src={foto14} className="miniatura" onClick={() => abrirImagen(foto14)} />
        <img src={foto15} className="miniatura" onClick={() => abrirImagen(foto15)} />
        <img src={foto16} className="miniatura" onClick={() => abrirImagen(foto16)} />
        <img src={foto17} className="miniatura" onClick={() => abrirImagen(foto17)} />
        <img src={foto18} className="miniatura" onClick={() => abrirImagen(foto18)} />
        <img src={foto19} className="miniatura" onClick={() => abrirImagen(foto19)} />
      </div>

      <div className={`galeria ${galeriaActiva === "2" ? "abierta" : ""}`}>
        <img src={foto20} className="miniatura" onClick={() => abrirImagen(foto20)} />
        <img src={foto21} className="miniatura" onClick={() => abrirImagen(foto21)} />
        <img src={foto22} className="miniatura" onClick={() => abrirImagen(foto22)} />
        <img src={foto23} className="miniatura" onClick={() => abrirImagen(foto23)} />
        <img src={foto24} className="miniatura" onClick={() => abrirImagen(foto24)} />
        <img src={foto25} className="miniatura" onClick={() => abrirImagen(foto25)} />
        <img src={foto26} className="miniatura" onClick={() => abrirImagen(foto26)} />
        <img src={foto27} className="miniatura" onClick={() => abrirImagen(foto27)} />
      </div>

      <div className={`galeria ${galeriaActiva === "3" ? "abierta" : ""}`}>
        <img src={foto28} className="miniatura" onClick={() => abrirImagen(foto28)} />
        <img src={foto29} className="miniatura" onClick={() => abrirImagen(foto29)} />
        <img src={foto30} className="miniatura" onClick={() => abrirImagen(foto30)} />
        <img src={foto31} className="miniatura" onClick={() => abrirImagen(foto31)} />
        <img src={foto32} className="miniatura" onClick={() => abrirImagen(foto32)} />
        <img src={foto33} className="miniatura" onClick={() => abrirImagen(foto33)} />
        <img src={foto34} className="miniatura" onClick={() => abrirImagen(foto34)} />
        <img src={foto35} className="miniatura" onClick={() => abrirImagen(foto35)} />
        <img src={foto36} className="miniatura" onClick={() => abrirImagen(foto36)} />
        <img src={foto37} className="miniatura" onClick={() => abrirImagen(foto37)} />
        <img src={foto38} className="miniatura" onClick={() => abrirImagen(foto38)} />
        <img src={foto39} className="miniatura" onClick={() => abrirImagen(foto39)} />
        <img src={foto40} className="miniatura" onClick={() => abrirImagen(foto40)} />
        <img src={foto41} className="miniatura" onClick={() => abrirImagen(foto41)} />
        <img src={foto42} className="miniatura" onClick={() => abrirImagen(foto42)} />
        <img src={foto43} className="miniatura" onClick={() => abrirImagen(foto43)} />
        <img src={foto44} className="miniatura" onClick={() => abrirImagen(foto44)} />
        <img src={foto45} className="miniatura" onClick={() => abrirImagen(foto45)} />
        <img src={foto46} className="miniatura" onClick={() => abrirImagen(foto46)} />
        <img src={foto47} className="miniatura" onClick={() => abrirImagen(foto47)} />
        <img src={foto48} className="miniatura" onClick={() => abrirImagen(foto48)} />
        <img src={foto49} className="miniatura" onClick={() => abrirImagen(foto49)} />
        <img src={foto50} className="miniatura" onClick={() => abrirImagen(foto50)} />
      </div>

      <div className={`galeria ${galeriaActiva === "4" ? "abierta" : ""}`}>
        <img src={foto51} className="miniatura" onClick={() => abrirImagen(foto51)} />
        <img src={foto52} className="miniatura" onClick={() => abrirImagen(foto52)} />
        <img src={foto53} className="miniatura" onClick={() => abrirImagen(foto53)} />
        <img src={foto54} className="miniatura" onClick={() => abrirImagen(foto54)} />
        <img src={foto55} className="miniatura" onClick={() => abrirImagen(foto55)} />
        <img src={foto56} className="miniatura" onClick={() => abrirImagen(foto56)} />
        <img src={foto57} className="miniatura" onClick={() => abrirImagen(foto57)} />
        <img src={foto58} className="miniatura" onClick={() => abrirImagen(foto58)} />
      </div>

      <div className={`galeria ${galeriaActiva === "5" ? "abierta" : ""}`}>
        <img src={foto59} className="miniatura" onClick={() => abrirImagen(foto59)} />
        <img src={foto60} className="miniatura" onClick={() => abrirImagen(foto60)} />
        <img src={foto61} className="miniatura" onClick={() => abrirImagen(foto61)} />
        <img src={foto62} className="miniatura" onClick={() => abrirImagen(foto62)} />
        <img src={foto63} className="miniatura" onClick={() => abrirImagen(foto63)} />
        <img src={foto64} className="miniatura" onClick={() => abrirImagen(foto64)} />
        <img src={foto65} className="miniatura" onClick={() => abrirImagen(foto65)} />
        <img src={foto66} className="miniatura" onClick={() => abrirImagen(foto66)} />
        <img src={foto67} className="miniatura" onClick={() => abrirImagen(foto67)} />
        <img src={foto68} className="miniatura" onClick={() => abrirImagen(foto68)} />
        <img src={foto69} className="miniatura" onClick={() => abrirImagen(foto69)} />
      </div>

      <div className={`galeria ${galeriaActiva === "6" ? "abierta" : ""}`}>
        <img src={foto70} className="miniatura" onClick={() => abrirImagen(foto70)} />
        <img src={foto71} className="miniatura" onClick={() => abrirImagen(foto71)} />
        <img src={foto72} className="miniatura" onClick={() => abrirImagen(foto72)} />
        <img src={foto73} className="miniatura" onClick={() => abrirImagen(foto73)} />
        <img src={foto74} className="miniatura" onClick={() => abrirImagen(foto74)} />
        <img src={foto75} className="miniatura" onClick={() => abrirImagen(foto75)} />
        <img src={foto76} className="miniatura" onClick={() => abrirImagen(foto76)} />
        <img src={foto77} className="miniatura" onClick={() => abrirImagen(foto77)} />
        <img src={foto78} className="miniatura" onClick={() => abrirImagen(foto78)} />
        <img src={foto79} className="miniatura" onClick={() => abrirImagen(foto79)} />
        <img src={foto80} className="miniatura" onClick={() => abrirImagen(foto80)} />
        <img src={foto81} className="miniatura" onClick={() => abrirImagen(foto81)} />
        <img src={foto82} className="miniatura" onClick={() => abrirImagen(foto82)} />
      </div>

      <div className={`galeria ${galeriaActiva === "7" ? "abierta" : ""}`}>
        <img src={foto83} className="miniatura" onClick={() => abrirImagen(foto83)} />
        <img src={foto84} className="miniatura" onClick={() => abrirImagen(foto84)} />
        <img src={foto85} className="miniatura" onClick={() => abrirImagen(foto85)} />
        <img src={foto86} className="miniatura" onClick={() => abrirImagen(foto86)} />
        <img src={foto87} className="miniatura" onClick={() => abrirImagen(foto87)} />
        <img src={foto88} className="miniatura" onClick={() => abrirImagen(foto88)} />
      </div>

      {imagenAmpliada && (
        <div className="overlay" onClick={cerrarImagen}>
           <img src={imagenAmpliada} className="imagen-ampliada" />
        </div>
      )}

    </div>
  );
}

export default GaleriaConClick