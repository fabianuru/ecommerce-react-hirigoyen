import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


import "./navbar.scss"

const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/jugos">Jugos</Link>
        </li>
        <li className="category">
          <Link to="/category/planes">Planes</Link>
        </li>
        <li className="category">
          <Link to="/category/suscripcion">Suscripciones</Link>
        </li>
      </ul>

      <Link to="/">
        <p className="title-brand ">JUICELAB</p>
      </Link>
      <CartWidget />

    </nav>
  )
}
export default NavBar