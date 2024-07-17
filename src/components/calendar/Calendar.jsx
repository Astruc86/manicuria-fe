import React, { useEffect, useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "dayjs/locale/es";
import { useStepperContext } from "../../context/StepperContext";
import citasService from "../../services/citasService";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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

  useEffect(() => {
    const fetchDias = async () => {
      try {
        let result;
        if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
          result = await citasService.traerPrimerProfesional(
            listaProfesionalesBE
          );
        } else {
          result = await citasService.traerFiltradasDisponiblesPorProfesional(
            profesionalSeleccionado.id
          );
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
      date.isSameOrAfter(today, "day") &&
      date.isSameOrBefore(maxDate, "day")
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