import { useState } from 'react'

export const Formulario = ({ setTareas }) => {

  const [proyecto, setProyecto] = useState('')
  const [tipoTarea, setTipoTarea] = useState('')
  const [personaAsignada, setPersonaAsignada] = useState('')
  const [storyPoints, setStoryPoints] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fechaCreacion, setFechaCreacion] = useState('')
  const [resumen, setResumen] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando formulario')

    // Validación de formulario
    if ([proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen].includes('')) {
      console.log('Hay campos vacíos')
      setError(true)
      return
    }

    // En caso de que no haya errores
    setError(false)

    // Crear objeto de tarea
    const tarea = {
      proyecto,
      tipoTarea,
      personaAsignada,
      storyPoints,
      prioridad,
      fechaCreacion,
      resumen
    }

    // Guardar tarea
    setTareas(prevTareas => [...prevTareas, tarea])

    // Reiniciar formulario
    setProyecto('')
    setTipoTarea('')
    setPersonaAsignada('')
    setStoryPoints('')
    setPrioridad('')
    setFechaCreacion('')
    setResumen('')
  }

  return (
    <div className='w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">Gestión de Tareas</h2>

      <p className="text-center mt-5">Añade Tareas y {''}
        <span className="text-indigo-600 font-bold">Adminístralas</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mt-10">

      {error && 
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          Todos los campos son obligatorios
        </p>
      }

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Proyecto:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="text"
            placeholder="Nombre del Proyecto"
            value={proyecto}
            onChange={(e) => setProyecto(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Tipo de Tarea:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="text"
            placeholder="Tipo de Tarea"
            value={tipoTarea}
            onChange={(e) => setTipoTarea(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Persona Asignada:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="text"
            placeholder="Nombre del Desarrollador"
            value={personaAsignada}
            onChange={(e) => setPersonaAsignada(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Story Points:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="number"
            placeholder="Puntos de Historia"
            value={storyPoints}
            onChange={(e) => setStoryPoints(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Prioridad:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="text"
            placeholder="Prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Fecha de Creación:</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            type="date"
            value={fechaCreacion}
            onChange={(e) => setFechaCreacion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Resumen:</label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            placeholder="Descripción breve"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className="bg-indigo-600 w-full mt-5 p-2 uppercase text-white font-bold hover:bg-indigo-700">
          Agregar Tarea
        </button>
      </form>
    </div>
  )
}
