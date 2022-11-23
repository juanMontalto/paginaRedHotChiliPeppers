import { Titulo } from "../Titulo/Titulo";

function Formulario (){
  let subtitulo = 'subtitulo del Form'
  return (
    <div>
      <Titulo titulo='Titulo de Form' subTitulo={subtitulo} />
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario