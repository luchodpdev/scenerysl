import './AnimacionInicial.css'

const AnimacionInicial = () => {
    return (
        <div className='animacionInicial'>

            <div id='bordeGiratorio'>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
                <div className='cuadradosBorde'></div>
            </div>

            <div id='camara'>

                <div id='cuerpoCamara'>
                    <div id='pantallaCamara'></div>
                    <div id='ledCamara'></div>
                    <div id='ledCamaraEncendido'></div>

                </div>

                <div id='pataCamara'></div>


                <div id='visorCamara'></div>

                <div className='cintaVideo'></div>
            </div>

            <div id='lapiz'>
                
                <div className='puntaLapizSuperior'></div>

                <div className='contenedorLineas'>
                    <div className='lineasLapizLaterales'></div>
                    <div className='lineasLapizCentral'></div>
                    <div className='lineasLapizLaterales'></div>
                </div>

                <div className='puntaLapizInferior'></div>

                
            </div>

      </div>
    )
}

export default AnimacionInicial