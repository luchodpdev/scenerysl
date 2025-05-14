import Logocamara from './components/Logocamara'
import Navbar from './components/Navbar'
import Fondo from './components/Fondo'
import './App.css'
import Fondoquienes from './components/Fondoquienes'
import Fotoquienes from './components/Fotoquienes'
// import Carddiseño from './components/Carddiseño'
/*import Fondoporque from './components/Fondoporque'*/
import cardfondo from './images/yate4.jpg'
import LogoIg from './components/LogoIg'
import LogoWa from './components/LogoWa'
import GaleriaConClick from './components/GaleriaCine/GaleriaConClick'

function App() {
  

  return (
    <>
    <header>

      <div className='sombrasuperior'></div>

      <div className='contlogonav'>
        <Logocamara />
        <Navbar/>
      </div>

      <div className='fondo'>
        <Fondo/>
        <div className='fondonombre'>
          <h1 className='titulo'>Scenery. S.L.</h1>
        </div>
      </div>

        <div className='parrafofondo'>
           <p>Una mirada dentro del mundo que 
          necesitas construir
        </p>
        </div>

        <div className='contenedorcardfondo'>

          <div className='botonflechaizq' >
            <div className='triangulo'></div>
          </div>

          <img src={cardfondo} id='cardfondo'></img>

          <div className='botonflechader' >
            <div className='trianguloder'></div>

          </div>

        </div>

  

      <div className='fondoquienes'>
        <Fondoquienes/>
        <Fotoquienes/>
      </div>


      <div className='mascositas'>
        <h1 id='mascositas'>Trabajos</h1>
        <div className='cardscroll'>
          <GaleriaConClick/>
          {/* <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/>
          <Carddiseño/> */}
        </div>
      </div>


      {/* <div className='fondoquienes'>
        <Fondoporque/>
      </div> */}



    </header>
    <footer>
      <div className='contenedorlogos'>
        <LogoIg></LogoIg>
        <LogoWa></LogoWa>

      </div>
      <div className='infofooter'>
        <a>Información legal</a>
        <a>Política de privacidad</a>
        <a>Política de cookies</a>
      </div>
      <p id='parrafofooter'>Scenery. S.L. © 2022 — Todos los derechos reservados.</p>
    </footer>
    <div className='sombrainferior'></div>
    </>
  )
}

export default App
