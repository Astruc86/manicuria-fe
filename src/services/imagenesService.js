import config from "../config";
import mockImagenes from "../json/imagenes.json";

const imagenesService = {
  crear: async (imagenData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear una imagen en el mock
      console.log("crear imagen (mock)");
      return;
    }

    const response = await fetch(
      `${config.imagenesApiBaseUrl}/imagenes/crear`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imagenData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerTodas: async () => {
    if (config.useMockData) {
      return mockImagenes;
    }

    const response = await fetch(`${config.imagenesApiBaseUrl}/imagenes/traer`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerId: async (id) => {
    if (config.useMockData) {
      return mockImagenes.find((imagen) => imagen.id === id);
    }

    const response = await fetch(
      `${config.imagenesApiBaseUrl}/imagenes/traer/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar una imagen en el mock
      console.log("borrar imagen (mock)");
      return;
    }

    const response = await fetch(
      `${config.imagenesApiBaseUrl}/imagenes/borrar/${id}`,
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

  editar: async (imagenData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar una imagen en el mock
      console.log("editar imagen (mock)");
      return;
    }

    const response = await fetch(
      `${config.imagenesApiBaseUrl}/imagenes/editar`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imagenData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },

  traerPorUrl: async (url) => {
    if (config.useMockData) {
      return mockImagenes.find((imagen) => imagen.url === url);
    }

    //to do: revisar si el endpoint es correcto
    const response = await fetch(
      `${config.imagenesApiBaseUrl}/imagenes/traer/url?url=${encodeURIComponent(
        url
      )}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  },
};

export default imagenesService;
