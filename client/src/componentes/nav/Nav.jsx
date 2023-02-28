import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import './nav.css'

const Nav = ({onSearch}) => {
    return (
        <div className="contenedor">
        <div className="links">
            <button className="botones" style={{width: "9rem", height: "2.5rem", fontSize: "1.2rem", marginLeft: "4rem"}} >
                <Link style={{textDecoration: "none", color: "black"}} className="linki" to="/form" >Crear receta</Link> 
            </button>
            {/* <Link style={{textDecoration: "none", color: "black"}} to="/">Back</Link> */}
        </div>
        <div className="search" >
            <SearchBar onSearch={onSearch}></SearchBar>
        </div>
        </div>
    )
}

export default Nav