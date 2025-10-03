import { useState } from "react";
import "./NewUser.css"

export default function NewUser( {crearUsuario} ){

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")

    // Test

    const submit = (e) => {

        console.log(nombre,correo)

        e.preventDefault();
        if (!nombre.trim() || !correo.trim()) return alert("completa los datos");
        console.log(nombre.trim)

        crearUsuario({nombre, correo})

        setNombre("")
        setCorreo("")
        
    }

    return (

        <section className="card formcard">
            <h2>nuevo usuario</h2>

            <form className="form" onSubmit={submit}>

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
                </div>


            </form>

        </section>

    )

}