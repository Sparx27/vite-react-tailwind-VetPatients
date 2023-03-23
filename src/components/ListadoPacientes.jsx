import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 mx-2'>
      <h2 className='font-black text-3xl text-center mt-10 md:mt-0'>Listado Pacientes</h2>

      <p className='font-bold text-lg mt-5 text-center mb-10'>
        Administra tus {' '}
        <span className='text-indigo-600'>Pacientes y Citas</span>
      </p>

      {
        pacientes.length === 0
          ? <p className='italic underline font-medium text-center'>No se han agregado pacientes</p>
          : (
            <div className='h-640 overflow-y-scroll'>
              {
                pacientes.map(paciente =>
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />)
              }
            </div>
            )
      }

    </div>
  )
}

export default ListadoPacientes
