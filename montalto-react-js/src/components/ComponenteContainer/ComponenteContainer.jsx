import Formulario from "../Fomulario/Formulario"
import NavBar from "../NavBar/NavBar"
import Titulo from "../Titulo/Titulo"

const ComponenteContainer = () => {
    let tituloApp = 'Tienda de los Red Hot Chili Peppers'
  return (
    <div>
      <NavBar />
      <Titulo 
      titulo={tituloApp} 
      subTitulo={'Encontra sus prendas originales acá!'} />
      <Formulario />

    </div>
  )
}

export default ComponenteContainer