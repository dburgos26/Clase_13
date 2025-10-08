import { useEffect, useState } from 'react'
import "./App.css"

import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

import supabase from './utils/supabase';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    async function getUsuarios() {
      const { data } = await supabase.from("people").select()

      setUsuarios(data)
    }

    getUsuarios()

  }, [])

  const crearUsuario = ({ nombre, correo }) => {

    const nuevo = {id: Date.now(), nombre, correo}
    setUsuarios((prev) => [...prev, nuevo])

  }

  const borrarUsuario = (id) => {

    if (confirm("quieres borrar al usuario")) {
      setUsuarios( (prev) => prev.filter((u) => u.id !== id) )
    }

  }

  const actualizarUsuario = (id, {nombre, correo}) => {

    setUsuarios( (prev) => prev.map(
      (u) => (u.id === id ? {...u, nombre, correo}: u) 
    ))

  }

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home usuarios={usuarios} borrarUsuario={borrarUsuario} />} /> 
        <Route path="/crear" element={ <NewUser crearUsuario={crearUsuario} /> } /> 
        <Route path="/editar/:id" element={ <EditUser usuarios={usuarios} actualizarUsuario={actualizarUsuario}/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
