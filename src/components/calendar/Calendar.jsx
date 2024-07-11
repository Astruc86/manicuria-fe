import React, { useEffect, useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import citaData from "../../json/cita.json";
import citaPrimerProfesionalData from "../../json/citaPrimerProfesional.json";
import { useStepperContext } from "../../context/StepperContext";
import dayjs from "dayjs";
import "dayjs/locale/es";
import citasService from "../../services/citasService";

const Calendar = () => {
  const {
    seleccionDia,
    setSeleccionDia,
    profesionalSeleccionado,
    listaProfesionalesBE,
  } = useStepperContext();
  const [fechasDisponibles, setFechasDisponibles] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    seleccionDia ? dayjs(seleccionDia) : null
  );

  // useEffect(() => {
  //   try {
  //     let citas = citaData;

  //     if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
  //       citas = citaPrimerProfesionalData;
  //     }

  //     const fechas = citas.map((cita) => dayjs(cita.fecha));
  //     setFechasDisponibles(fechas);
  //   } catch (error) {
  //     console.error("Error al cargar los datos de citas:", error);
  //   }
  // }, [profesionalSeleccionado]);

  useEffect(() => {
    const fetchDias = async () => {
      try {
        let result;
        if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
          result = await citasService.traerPrimerProfesional(
            listaProfesionalesBE
          );
          //setFechasDisponibles(result);
        } else {
          result = await citasService.traerFiltradasDisponiblesPorProfesional(
            profesionalSeleccionado.id
          );
          //setFechasDisponibles(result);
        }

        const fechas = result.map((cita) => dayjs(cita.fecha));
        setFechasDisponibles(fechas);
      } catch (error) {
        console.error("Error fetching días calendario:", error);
      }
    };

    fetchDias();
  }, []);

  const isDateSelectable = (date) => {
    const today = dayjs();
    const maxDate = today.add(30, "day");

    return (
      fechasDisponibles.some((f) => f.isSame(date, "day")) &&
      date.isAfter(today, "day") &&
      date.isBefore(maxDate, "day")
    );
  };

  const handleDateChange = (date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
      setSeleccionDia(date.format("YYYY-MM-DD"));
    }
  };

  const customStyles = {
    "& .MuiPickersDay-dayWithMargin": {
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    },
    "& .Mui-selected": {
      backgroundColor: "#ffd1af !important",
      color: "#0a0a0a !important",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate}
        onChange={handleDateChange}
        shouldDisableDate={(date) => !isDateSelectable(date)}
        sx={customStyles}
        slots={{ textField: (params) => <TextField {...params} /> }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
