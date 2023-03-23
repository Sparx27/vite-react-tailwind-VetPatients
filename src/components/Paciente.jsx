import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = window.confirm(`Desea eliminar al paciente ${nombre}?`)

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className='m-5 mt-0 py-8 px-5 bg-white shadow-md rounded-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {' '}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {' '}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {' '}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: {' '}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>

      <p className='font-bold text-gray-700 uppercase'>
        Síntomas: {' '}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className='mt-4 flex justify-between'>
        <button
          className='mr-2 py-2 px-6 rounded bg-indigo-600 font-bold text-white uppercase transition-all hover:bg-indigo-700'
          type='button'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 rounded bg-red-600 font-bold text-white uppercase transition-all hover:bg-red-700'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
