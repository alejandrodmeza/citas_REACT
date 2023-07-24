import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {
  const [pacientes, setpacientes] = useState([]);
  const [paciente, setpaciente] = useState({});

  useEffect(() => {
    const obtLocalS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setpacientes(pacientesLS);
    }
    obtLocalS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes )); 
  }, [pacientes]);

  const eliminarPaciente = id =>{
    const pacienteActualizados = pacientes.filter(paciente => paciente.id != id);

    setpacientes(pacienteActualizados);
  }

  return (
    <>
        <div className="container mx-auto mt-10">
          <Header/>

          <div className="mt-12 md:flex">
            <Formulario 
              pacientes = { pacientes } setpacientes = { setpacientes }
              paciente = { paciente }
              setpaciente = { setpaciente }
            />
            <ListadoPacientes 
              pacientes = { pacientes }
              setpaciente = { setpaciente }
              eliminarPaciente = { eliminarPaciente }
            />
          </div>

        </div>
    </>
  )
}