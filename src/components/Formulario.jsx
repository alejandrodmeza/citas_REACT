import { useEffect, useState } from "react";
import { Error } from './Error';

export const Formulario = ( {pacientes, setpacientes, paciente, setpaciente} ) => {
  
  const [nombre, setnombre] = useState('');
  const [propietario, setpropietario] = useState('');
  const [email, setemail] = useState('');
  const [fecha, setfecha] = useState('');
  const [sintomas, setsintomas] = useState('');

  const [error, seterror] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setnombre(paciente.nombre);
      setpropietario(paciente.propietario);
      setemail(paciente.email);
      setfecha(paciente.fecha);
      setsintomas(paciente.sintomas);
    }

  }, [paciente]);

  const generarid = () => {
    const random = Math.random(36).toString().substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      seterror(true);
      return;
    }
    seterror(false);

    const objPaciente = {
      nombre, propietario, email, fecha, sintomas
    }

    if( paciente.id ){
      // Editando el objeto
      objPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map(
        pacienteState => 
          pacienteState.id === paciente.id ? objPaciente : pacienteState
      );

      setpacientes(pacienteActualizado);
      setpaciente({});

    }else{
      // Nuevo registro
      objPaciente.id = generarid();
      setpacientes([...pacientes, objPaciente]);
    }
    setnombre('');
    setpropietario('');
    setemail('');
    setfecha('');
    setsintomas('');
  }
  
  return (
    <>
     <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold "> Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {error && <Error mensaje = { ' Todos los campos son obligatorios' }/>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota {nombre}</label>

          <input id="mascota" type="text" placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={ (e) => setnombre(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

          <input id="propietario" type="text" placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={ (e) => setpropietario(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

          <input id="email" type="email" placeholder="Email del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={ (e) => setemail(e.target.value) }/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

          <input id="alta" type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={ (e) => setfecha(e.target.value) }/>
        </div>


        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>

          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" value={sintomas} onChange={ (e) => setsintomas(e.target.value) }/>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value= { paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
      </form>
    </div>
    </>
  )
}