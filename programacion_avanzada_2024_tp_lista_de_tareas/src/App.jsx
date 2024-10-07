import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoTareas } from './components/ListadoTareas'
import './App.css'

function App() {
  // Estado para manejar las tareas
  const [tareas, setTareas] = useState([])

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index)
    setTareas(nuevasTareas)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
        {/* Pasar solo setTareas al Formulario */}
        <Formulario
          setTareas={setTareas}
        /> 
        {/* Pasar tareas y eliminarTarea a ListadoTareas */}
        <ListadoTareas
          tareas={tareas}
          eliminarTarea={eliminarTarea}
        />   
      </div> 
    </div>
  )
}

export default App

