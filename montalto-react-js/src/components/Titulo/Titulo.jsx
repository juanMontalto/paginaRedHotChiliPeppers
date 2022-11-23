export

function Titulo(props){
    console.log(props)
    return (
        <div>
            <h1> {props.titulo} </h1>
            <h3> {props.subTitulo} </h3>
        </div>
    )
}

export default Titulo