import config from "../config";
import mockProfesionales from "../json/profesionales.json";

const profesionalesService = {
  crear: async (profesionalData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear un profesional en el mock
      console.log("Crear profesional (mock)");
      return;
    }

    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/crear`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profesionalData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerTodos: async () => {
    if (config.useMockData) {
      return mockProfesionales;
    }

    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/traer`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerId: async (id) => {
    if (config.useMockData) {
      return mockProfesionales.find((profesional) => profesional.id === id);
    }

    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/traer/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar un profesional en el mock
      console.log("Borrar profesional (mock)");
      return;
    }

    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/borrar/${id}`,
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

  editar: async (profesionalData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar un profesional en el mock
      console.log("Editar profesional (mock)");
      return;
    }
    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/editar`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profesionalData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerPorServicio: async (idServicio) => {
    if (config.useMockData) {
      return mockProfesionales.filter((profesional) =>
        profesional.listaServicios.find((servicio) => servicio === idServicio)
      );
    }

    const response = await fetch(
      `${config.profesionalesApiBaseUrl}/profesionales/traer/servicio/${idServicio}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },
};

export default profesionalesService;
