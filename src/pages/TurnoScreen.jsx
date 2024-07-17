import React, { memo, useEffect } from "react";
import StepperComponent from "../components/stepper/Stepper";
import ServicioItem from "../components/servicioItem/ServicioItem";
import ProfesionalList from "../components/profesionalList/ProfesionalList";
import Calendar from "../components/calendar/Calendar";
import HorarioList from "../components/horaSeleccion/HorarioList";
import Resumen from "../components/resumen/Resumen";
import ResumenFinal from "../components/resumen/ResumenFinal";
import "../styles/turnoScreen.css";
import {
  useActiveStep,
  useSeleccionServicio,
  useProfesionalSeleccionado,
  useSeleccionHorario,
  useSeleccionDia,
  useSeleccionCita,
  useProfesionalViejo,
} from "../context/StepperContext";
import citas from "../json/citas.json";
import citasService from "../services/citasService";

const TurnoScreen = memo(() => {
  const steps = ["Servicio", "Profesional", "Día", "Hora", "Finalizar"];
  const { activeStep, setActiveStep } = useActiveStep();
  const { seleccionServicio, setSeleccionServicio } = useSeleccionServicio();
  const { profesionalSeleccionado, setProfesionalSeleccionado } =
    useProfesionalSeleccionado();
  const { seleccionHorario, setSeleccionHorario } = useSeleccionHorario();
  const { seleccionDia, setSeleccionDia } = useSeleccionDia();
  const { seleccionCita, setSeleccionCita } = useSeleccionCita();

  const { profesionalViejo, setProfesionalViejo } = useProfesionalViejo();
  const stepStateMap = {
    1: setProfesionalSeleccionado,
    2: setSeleccionDia,
    3: setSeleccionHorario,
  };

  const clearFutureSteps = (step) => {
    Object.keys(stepStateMap).forEach((key) => {
      if (step < key) {
        stepStateMap[key](null);
      }
    });
  };

  const clearPastStep = (step) => {
    if (step === 3 && profesionalViejo) {
      setProfesionalViejo(null);
      setProfesionalSeleccionado({ id: 0 });
    }
  };

  const handleNext = () => {
    clearFutureSteps(activeStep);
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    clearPastStep(activeStep);
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleConfirmar = () => {
    // To do: cuando este la integracion hecha, descomentar el siguiente bloque de codigo y elimar el descomentado
    const fetchCita = async () => {
      try {
        const result = await citasService.traerPorProfesionalFechaHora(
          seleccionDia,
          profesionalSeleccionado.id,
          seleccionHorario.hora
        );
        console.log("Cita encontrada:", result);
    
        setSeleccionCita(result);
      } catch (error) {
        console.error("Error fetching citas:", error);
      }
    };
    fetchCita();

    // To do: eliminar el siguiente bloque de codigo cuando este la integracion hecha
    // Hasta que no se haga la US de PPD, cuando es PPD no va a encontrar una cita dado que id=0
    // const cita = citas.find(
    //   (cita) =>
    //     cita.hora == seleccionHorario.hora &&
    //     cita.fecha == seleccionDia &&
    //     cita.profesionalesDisponibles.includes(profesionalSeleccionado.id)
    // );

    // console.log("Cita encontrada:", cita);

    // setSeleccionCita(cita);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ServicioItem setSeleccion={setSeleccionServicio} />;
      case 1:
        return <ProfesionalList setSeleccion={setProfesionalSeleccionado} />;
      case 2:
        return <Calendar setSeleccion={setSeleccionDia} />;
      case 3:
        return <HorarioList setSeleccion={setSeleccionHorario} />;
      default:
        return <ResumenFinal />; // Mostrar ResumenFinal en el último paso
    }
  };

  return (
    <div
      className={`turno-screen ${
        [1, 2, 3].includes(activeStep) ? "split-layout" : ""
      }`}
    >
      <div className="content">
        <StepperComponent
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleConfirmar={handleConfirmar}
          getStepContent={getStepContent}
          seleccionServicio={seleccionServicio}
          profesionalSeleccionado={profesionalSeleccionado}
          seleccionHorario={seleccionHorario}
          seleccionDia={seleccionDia}
        />
      </div>
      {[1, 2, 3].includes(activeStep) && (
        <div className="resumen-container">
          <Resumen />
        </div>
      )}
    </div>
  );
});

export default TurnoScreen;
