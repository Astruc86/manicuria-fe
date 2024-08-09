import config from "../config";
import mockServicios from "../json/servicios.json";

const serviciosService = {
  crear: async (servicioData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear un servicio en el mock
      console.log("Crear servicio (mock)");
      return;
    }

    const response = await fetch(
      `${config.serviciosApiBaseUrl}/servicios/crear`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servicioData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerTodos: async () => {
    if (config.useMockData) {
      return mockServicios;
    }

    const response = await fetch(
      `${config.serviciosApiBaseUrl}/servicios/traer`
    );
    if (response.status == 404) return []
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerId: async (id) => {
    if (config.useMockData) {
      return mockServicios.find((servicio) => servicio.id === id);
    }

    const response = await fetch(
      `${config.serviciosApiBaseUrl}/servicios/traer/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar un servicio en el mock
      console.log("Borrar servicio (mock)");
      return;
    }

    const response = await fetch(
      `${config.serviciosApiBaseUrl}/servicios/borrar/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  editar: async (servicioData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar un servicio en el mock
      console.log("Editar servicio (mock)");
      return;
    }

    const response = await fetch(
      `${config.serviciosApiBaseUrl}/servicios/editar`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servicioData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export default serviciosService;
