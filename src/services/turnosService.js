import config from "../config";
import mockTurnos from "../json/turnos.json";
const turnosService = {
  crear: async (turnoData, agregarTurno, generarId) => {
    if (config.useMockData) {
      const idNuevo = generarId();
      const turnoNuevo = {
        fechaCita: turnoData.cita.fecha,
        horaCita: turnoData.cita.hora,
        nombreServicio: turnoData.servicio.nombre,
        duracionServicio: turnoData.servicio.duracion,
        precioServicio: turnoData.servicio.precio,
        nombreProfesional: turnoData.profesional.nombre,
        dni: turnoData.dni,
        id: idNuevo,
      };
      agregarTurno(turnoNuevo);
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
    return response.json();
  },

  traerTodos: async () => {
    if (config.useMockData) {
      return mockTurnos;
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
};

export default turnosService;
