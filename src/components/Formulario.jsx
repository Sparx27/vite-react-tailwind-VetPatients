import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  const objetoPaciente = {
    nombre,
    propietario,
    email,
    fecha,
    sintomas
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  function generarID () {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      return setError(true)
    }

    if (paciente.id) {
      setError(false)
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      setError(false)
      objetoPaciente.id = generarID()
      setPacientes([...pacientes, objetoPaciente])
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Formulario</h2>

      <p className='font-bold text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600'>Adminístralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>

        {
          error && <ErrorMessage><p>Algunos campos se encuentran vacíos</p></ErrorMessage>
        }

        {/* Nombre */}
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 font-bold uppercase cursor-pointer'>Nombre Mascota</label>
          <input
            id='nombre'
            className='border-2 border-gray-300 outline-gray-500 w-full p-2 mt-2 rounded'
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* Propietario */}
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase cursor-pointer'>Nombre Propietario</label>
          <input
            id='propietario'
            className='border-2 border-gray-300 outline-gray-500 w-full p-2 mt-2 rounded'
            type='text'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase cursor-pointer'>Email</label>
          <input
            id='email'
            className='border-2 border-gray-300 outline-gray-500 w-full p-2 mt-2 rounded'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Alta */}
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 font-bold uppercase cursor-pointer'>Alta</label>
          <input
            id='alta'
            className='border-2 border-gray-300 outline-gray-500 w-full p-2 mt-2 rounded'
            type='date'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* Sintomas */}
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase cursor-pointer'>Síntomas</label>
          <textarea
            id='sintomas'
            className='border-2 border-gray-300 outline-gray-500 w-full p-2 mt-2 rounded'
            placeholder='Descripción de síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white font-bold uppercase cursor-pointer hover:bg-indigo-700 transition-all'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
