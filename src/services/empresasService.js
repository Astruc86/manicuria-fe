import config from "../config";
import mockEmpresas from "../json/empresas.json";

const empresasService = {
  crear: async (empresaData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear una empresa en el mock
      console.log("Crear empresa (mock)");
      return;
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/crear`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresaData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar una empresa en el mock
      console.log("borrar empresa (mock)");
      return;
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/borrar/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  editar: async (empresaData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar una empresa en el mock
      console.log("Editar empresa (mock)");
      return;
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/editar`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresaData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerId: async (id) => {
    if (config.useMockData) {
      //se harcodea el id de la empresa dado que siempre será el mismo
      id = 1;
      return mockEmpresas.find((empresa) => empresa.id === id);
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/traer/${id}`
    );
    if (response.status == 404) return null
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerLogo: async (idEmpresa) => {
    if (config.useMockData) {
      return mockEmpresas.find((empresa) => empresa.id === idEmpresa).logo;
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/traer/logo/${idEmpresa}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerCarrusel: async (idEmpresa) => {
    if (config.useMockData) {
      return mockEmpresas.find((empresa) => empresa.id === idEmpresa).listaCarrusel;
    }

    const response = await fetch(
      `${config.empresasApiBaseUrl}/empresas/traer/carrusel/${idEmpresa}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export default empresasService;
