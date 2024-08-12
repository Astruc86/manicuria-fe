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
    const dateComparison = new Date(t1.fechaCita) - new Date(t2.fechaCita);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    return t1.horaCita.localeCompare(t2.horaCita);
  });
};

const turnosService = {
  crear: async (turnoData) => {
    if (config.useMockData) {
      return;
    }

    const turnoNuevo = {
      idCita: turnoData.cita.id,
      idServicio: turnoData.servicio.id,
      idProfesional: turnoData.profesional.id,
      dni: turnoData.dni,
    };

    const response = await fetch(`${config.turnosApiBaseUrl}/turnos/crear`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(turnoNuevo),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  },

  traerTodos: async (turnosContext) => {
    if (config.useMockData) {
      //TODO: cuando se agregue login con dni, descomentar la siguiente linea y borrar la que le sigue
      //const turnos = turnosContext.concat(turnosContext);
      const turnos = turnosContext;

      return ordenarTurnos(turnos);
    }

    const response = await fetch(`${config.turnosApiBaseUrl}/turnos/traer`);
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
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
    const data = await response.json();
    return data;
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
    const data = await response.json();
    return data;
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
    const data = await response.json();
    return data;
  },

  traerPorDni: async (dni, turnosContext) => {
    if (config.useMockData) {
      const turnosDni = mockTurnos.filter((turno) => turno.dni == dni);
      const turnosContextDni = turnosContext.filter(
        (turno) => turno.dni == dni
      );
      const turnos = turnosDni.concat(turnosContextDni);
      return ordenarTurnos(turnos);
    }

    const response = await fetch(
      `${config.turnosApiBaseUrl}/turnos/traer/dni/${dni}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },
};

export default turnosService;
