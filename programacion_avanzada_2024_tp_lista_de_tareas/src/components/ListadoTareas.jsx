export const ListadoTareas = ({ tareas, eliminarTarea }) => {
  return (
    <div className="w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de Tareas</h2>

      {tareas && tareas.length ? (
        <div className="mt-5">
          {tareas.map((tarea, index) => (
            <div key={index} className="bg-white shadow-md px-5 py-3 rounded-lg mb-4">
              <p className="font-bold">Proyecto: {tarea.proyecto}</p>
              <p>Tipo de Tarea: {tarea.tipoTarea}</p>
              <p>Persona Asignada: {tarea.personaAsignada}</p>
              <p>Story Points: {tarea.storyPoints}</p>
              <p>Prioridad: {tarea.prioridad}</p>
              <p>Fecha de Creación: {tarea.fechaCreacion}</p>
              <p>Resumen: {tarea.resumen}</p>
              <button 
                className="bg-red-600 text-white font-bold py-1 px-2 mt-3 rounded"
                onClick={() => eliminarTarea(index)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">No hay tareas aún, comienza agregando algunas.</p>
      )}
    </div>
  )
}
