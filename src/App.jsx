import { useState } from 'react'
import "./App.css"

import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Ana García', correo: 'ana@email.com' },
    { id: 2, nombre: 'Carlos López', correo: 'carlos@email.com' },
    { id: 3, nombre: 'María Silva', correo: 'maria@email.com' },
    { id: 4, nombre: 'Juan', correo: 'juan@email.com' },
    { id: 5, nombre: 'David', correo: 'David@email.com' },
    { id: 6, nombre: 'test', correo: 'Test@email.com' }
  ]);

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
