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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const Calendar = () => {
  const { seleccionDia, setSeleccionDia, profesionalSeleccionado } =
    useStepperContext();
  const [selectedDate, setSelectedDate] = useState(
    seleccionDia ? dayjs(seleccionDia) : null
  );

  const queryClient = useQueryClient();

  const fetchFechas = () => {
    if (profesionalSeleccionado && profesionalSeleccionado.id === 0) {
      const storedProfesionales = queryClient.getQueryData(["profesionales"]);
      return citasService.traerPrimerProfesional(storedProfesionales);
    } else {
      return citasService.traerFiltradasDisponiblesPorProfesional(
        profesionalSeleccionado.id
      );
    }
  };

  const {
    isLoading,
    isError,
    data: fechasDisponibles = [],
  } = useQuery({
    queryKey: ["dias"],
    queryFn: fetchFechas,
    select: (data) => {
      if (data.length === 0) return [];
      const fechas = data.map((cita) => dayjs(cita.fecha));
      return [...fechas];
    },
  });

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
    <>
      {fechasDisponibles.length > 0 && (
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
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h1>Error cargando los días. Por favor, intente de nuevo más tarde.</h1>
      )}
      {!isError && !isLoading && fechasDisponibles.length === 0 && (
        <h1>No hay fechas disponibles.</h1>
      )}
    </>
  );
};

export default Calendar;
