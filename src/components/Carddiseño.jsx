import fotocard from '../images/tren2.jpg'

const Carddiseño = () => {
    return (
        <div className='carddiseño'>
            <img src={fotocard} id='fotocard'></img>
            <h3 className='titulocard'>Diseño de Filmación</h3>
            <p className='parrafocard'> La ambientación de cada detalle de la 
                escenografía y el decorado de todo el set
            </p>
        </div>
    )
}

export default Carddiseño