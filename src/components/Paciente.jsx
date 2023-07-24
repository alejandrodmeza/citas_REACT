export const Paciente = ({paciente, setpaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  
  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente');
    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: 
            <span className="font-normal normal-case"> {nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: 
            <span className="font-normal normal-case"> {propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: 
            <span className="font-normal normal-case"> {email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: 
            <span className="font-normal normal-case"> {fecha}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: 
            <span className="font-normal normal-case"> {sintomas}</span>
          </p>

          <div className="flex justify-between mt-10">
            <input className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg cursor-pointer" type="button" value="Editar"
            onClick={ () => setpaciente(paciente) }
            />
            <input className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer" type="button" value="Eliminar"  onClick={handleEliminar}/>
          </div>
        </div>
    </>
  )
}
