import Brand from "../Item/Brand"
import CartWidget from "../Item/CartWidget"

const NavBar = () => {
    const comprar = () => console.log('Click')
  return (
    <div className="navBar">
        <Brand />
        <a href="http://127.0.0.1:5500/pages/tienda.html"><li className="ropa">Remeras</li></a>
        <a href="http://127.0.0.1:5500/pages/tienda.html"><li className="ropa">Pantalones</li></a>
        <a href="http://127.0.0.1:5500/pages/tienda.html"><li className="ropa">Camperas</li></a>
        <a href="http://127.0.0.1:5500/pages/tienda.html"><li className="ropa">Gorros</li></a>
        <a href="http://127.0.0.1:5500/pages/tienda.html"><li className="ropa">Shorts</li></a>
        <CartWidget comprar={comprar}/>
    </div>
  )
}

export default NavBar