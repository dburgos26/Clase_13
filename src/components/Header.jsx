import {NavLink} from "react-router"
import "./Header.css"


export default function Header(){

    return (

        <header className="hdr">

            <div className="hdr__inner">

                <NavLink to="/" className="brand">
                    Usuarios - Homepage
                </NavLink>

                <nav className="nav">

                    <NavLink to="/crear" className={ ({isActive}) => isActive ? "link active": "link" }>
                        Crear
                    </NavLink>

                </nav>

            </div>

        </header>

    )

}