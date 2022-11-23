export

function Titulo({titulo='titulo por defecto', subTitulo='subtitulo por defecto'}){
    /* console.log(props) */
    return (
        <div>
            <h1>{ titulo }</h1>
            <h3>{ subTitulo }</h3>
        </div>
    )
}

export default Titulo