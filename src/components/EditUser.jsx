import { Link, useParams } from "react-router"
import "./EditUser.css"
import { useState } from "react";

export default function EditUser({ usuarios, actualizarUsuario }) {

    const { id } = useParams();
    const numId = Number(id);

    const usuario = usuarios.find((u) => u.id === numId)

    if (!usuario) {

        return (
            <section className="card">
                <p className="muted">No se encontro el usuario con el id: {id}</p>
                <Link to="/" className="btn secondary">volver</Link>
            </section>
        )

    }

    const [nombre, setNombre] = useState(usuario ? usuario.nombre: "")
    const [correo, setCorreo] = useState(usuario ? usuario.correo: "")

    const submit = (e) => {

        console.log(nombre, correo)

        e.preventDefault();
        if (!nombre.trim() || !correo.trim()) return alert("completa los datos");
        console.log(nombre.trim)

        actualizarUsuario(usuario.id, { nombre, correo })

    }

    return (

        <section className="card formcard">

            <h2>Editar usuario</h2>

            <form onSubmit={submit} className="form">

                <label>
                    Nombre
                    <input
                        type="text"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </label>
                <label>
                    Correo
                    <input
                        type="text"
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value) }
                    />
                </label>

                <div className="row">
                    <button className="btn" type="submit">guardar</button>
                    <Link to="/" className="btn secondary">Cancelar</Link>
                </div>

            </form>

        </section>

    )

}