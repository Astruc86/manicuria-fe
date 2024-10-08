import { useMemo } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "dayjs/locale/es";
import CircularIndeterminate from "../Progress/CircularIndeterminate";
import { useCalendario } from "../../hooks/useCalendario";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const Calendar = () => {
  const {
    fechasDisponibles,
    isError,
    isLoading,
    seleccionDia,
    setSeleccionDia,
  } = useCalendario();

  const seleccionDiaFormateado = seleccionDia ? dayjs(seleccionDia) : null;

  const isDateSelectable = useMemo(() => {
    const today = dayjs();
    const maxDate = today.add(30, "day");
    const fechasMap = new Set(
      fechasDisponibles.map((f) => f.format("YYYY-MM-DD"))
    );

    return (date) => {
      return (
        fechasMap.has(date.format("YYYY-MM-DD")) &&
        date.isSameOrAfter(today, "day") &&
        date.isSameOrBefore(maxDate, "day")
      );
    };
  }, [fechasDisponibles]);

  const handleDateChange = (date) => {
    if (isDateSelectable(date)) {
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
      color: "#0a0a0a !important",
      backgroundColor: "#FFE7DC !important",
    },
  };

  return (
    <>
      {fechasDisponibles.length > 0 && (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={seleccionDiaFormateado}
            onChange={handleDateChange}
            shouldDisableDate={(date) => !isDateSelectable(date)}
            sx={customStyles}
            slots={{ textField: (params) => <TextField {...params} /> }}
          />
        </LocalizationProvider>
      )}
      {isLoading && <CircularIndeterminate />}
      {isError && (
        <h3>Error cargando los días. Por favor, intente de nuevo más tarde.</h3>
      )}
      {!isError && !isLoading && fechasDisponibles.length === 0 && (
        <h3>No hay fechas disponibles.</h3>
      )}
    </>
  );
};

export default Calendar;
