import config from "../config";
import mockTurnos from "../json/turnos.json";

const getFechaActualString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getHoraActual = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const ordenarTurnos = (turnos) => {
  const horaActual = getHoraActual();
  const fechaActual = getFechaActualString();

  const turnosNuevos = turnos.filter(
    (turno) =>
      turno.fechaCita > fechaActual ||
      (turno.fechaCita == fechaActual && turno.horaCita >= horaActual)
  );

  const turnosViejos = turnos.filter(
    (turno) =>
      turno.fechaCita < fechaActual ||
      (turno.fechaCita == fechaActual && turno.horaCita < horaActual)
  );

  ordenarTurnosPorFechaYHora(turnosNuevos);
  ordenarTurnosPorFechaYHora(turnosViejos);
  const turnosOrdenados = turnosNuevos.concat(turnosViejos);
  return turnosOrdenados;
};

const ordenarTurnosPorFechaYHora = (turnos) => {
  turnos.sort((t1, t2) => {
    // Comparar las fechas
    const dateComparison = new Date(t1.fechaCita) - new Date(t2.fechaCita);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    // Si las fechas son iguales, comparar las horas
    return t1.horaCita.localeCompare(t2.horaCita);
  });
};

const turnosService = {
  crear: async (turnoData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear un turno en el mock
      console.log("Crear turno (mock)");
      return;
    }

    const response = await fetch(`${config.turnosApiBaseUrl}/turnos/crear`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(turnoData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerTodos: async () => {
    if (config.useMockData) {
      return ordenarTurnos(mockTurnos);
    }

    const response = await fetch(`${config.turnosApiBaseUrl}/turnos/traer`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerId: async (id) => {
    if (config.useMockData) {
      return mockTurnos.find((turno) => turno.id === id);
    }

    const response = await fetch(
      `${config.turnosApiBaseUrl}/turnos/traer/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar un turno en el mock
      console.log("borrar turno (mock)");
      return;
    }

    const response = await fetch(
      `${config.turnosApiBaseUrl}/turnos/borrar/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  editar: async (turnoData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar un turno en el mock
      console.log("editar turno (mock)");
      return;
    }

    const response = await fetch(`${config.turnosApiBaseUrl}/turnos/editar`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(turnoData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerPorDni: async (dni) => {
    if (config.useMockData) {
      const turnosDni = mockTurnos.filter((turno) => turno.dni == dni);
      return ordenarTurnos(turnosDni);
    }

    const response = await fetch(
      `${config.turnosApiBaseUrl}/turnos/traer/dni/${dni}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export default turnosService;
