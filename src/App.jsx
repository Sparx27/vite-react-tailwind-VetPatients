import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App () {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const stateLS = JSON.parse(window.localStorage.getItem('pacientes' ?? []))
    stateLS?.length > 0 && setPacientes(stateLS)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((pacienteState) =>
      pacienteState.id !== id
    )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto my-8 cursor-default'>
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
