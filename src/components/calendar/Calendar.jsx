import React, { useEffect, useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import citaData from '../../json/cita.json';
import { useStepperContext } from '../../context/StepperContext';
import dayjs from 'dayjs';
import "dayjs/locale/es";

const Calendar = () => {
  const { seleccionDia, setSeleccionDia } = useStepperContext();
  const [fechasDisponibles, setFechasDisponibles] = useState([]);
  const [selectedDate, setSelectedDate] = useState(seleccionDia ? dayjs(seleccionDia) : null);

  useEffect(() => {
    const fechas = citaData.map(cita => dayjs(cita.fecha));
    setFechasDisponibles(fechas);
  }, []);

  const isDateSelectable = (date) => {
    const today = dayjs();
    const maxDate = today.add(30, 'day');

    return fechasDisponibles.some(f => f.isSame(date, 'day')) &&
           date.isAfter(today, 'day') &&
           date.isBefore(maxDate, 'day');
  };

  const handleDateChange = (date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
      setSeleccionDia(date.format('YYYY-MM-DD'));
    }
  };

  const customStyles = {
    '& .MuiPickersDay-dayWithMargin': {
      '&:hover': {
        backgroundColor: '#f0f0f0', 
      },
    },
    '& .Mui-selected': {
      backgroundColor: '#ffd1af !important', 
      color: '#fff', 
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
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