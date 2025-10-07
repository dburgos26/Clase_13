import { useEffect, useState } from "react"
import "./Home.css"
import { Link } from "react-router"

export default function Home() {

    // borrar parametros

    // useEffect - traer los datos de los usuarios

    // Crear una funcion - fetch - delete

    // ajustes de html

    const [usuarios, setUsuarios] = useState([])

    async function traerDatos() {
            
            const response = await fetch("http://localhost:8080/api/users")
            const data = await response.json()
            console.log(data)

            setUsuarios(data)

        }

    useEffect( ()=>{

        traerDatos()

    }, [])

    async function borrarUsuario(id) {

        fetch(`http://localhost:8080/api/users/${id}`,
            {method: "DELETE",}
        );

        traerDatos()

    }

    return (

        <section className="card">
            <div className="card__hdr">
                <h1>usuarios</h1>
                <Link to="/crear" className="btn">Crear nuevo usuario</Link>
            </div>

            {
                usuarios.length === 0 ?
                    <p className="muted">No hay usuarios registrados</p>
                    : (

                        <ul className="grid">

                            {
                                usuarios.map((u) => (

                                    <li key={u.id} className="item">

                                        <div className="item__hdr">
                                            <h3>{u.name}</h3>
                                            <span className="tag">ID: {u.id}</span>
                                        </div>
                                        <p className="muted">{u.email}</p>
                                        <div className="actions">

                                            <Link to={`/editar/${u.id}`} className="btn secondary">editar</Link>

                                            <button className="btn dager" onClick={() => borrarUsuario(u.id)}>
                                                Eliminar
                                            </button>
                                        </div>

                                    </li>

                                ))
                            }

                        </ul>

                    )


            }


        </section>

    )

}