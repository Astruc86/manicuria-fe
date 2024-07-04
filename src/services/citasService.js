import config from "../config";
import mockCitas from "../json/citas.json";

const citasService = {
  crear: async (citaData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear una cita en el mock
      console.log("Crear profesional (mock)");
    }

    const response = await fetch(`${config.citasApiBaseUrl}/citas/crear`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(citaData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerTodas: async () => {
    if (config.useMockData) {
      return mockCitas;
    }

    const response = await fetch(`${config.citasApiBaseUrl}/citas/traer`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerId: async (id) => {
    if (config.useMockData) {
      return mockCitas.find((cita) => cita.id === id);
    }

    const response = await fetch(`${config.citasApiBaseUrl}/citas/traer/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  borrarId: async (id) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para borrar una cita en el mock
      console.log("Borrar profesional (mock)");
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/borrar/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  editar: async (citaData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para editar una cita en el mock
      console.log("Editar profesional (mock)");
    }

    const response = await fetch(`${config.citasApiBaseUrl}/citas/editar`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(citaData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerDisponiblesPorProfesional: async (idProfesional) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para traerDisponiblesPorProfesional cita en el mock
      console.log("traerDisponiblesPorProfesional (mock)");
      //   return mockCitas.filter(
      //     (cita) => cita.idProfesional === idProfesional && cita.disponible
      //   );
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/disponible/profesional/${idProfesional}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerFiltradasDisponiblesPorProfesional: async (idProfesional) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para traerFiltradasDisponiblesPorProfesional cita en el mock
      console.log("traerFiltradasDisponiblesPorProfesional (mock)");
      //   const currentDate = new Date().toISOString().split("T")[0];
      //   return mockCitas.filter(
      //     (cita) =>
      //       cita.idProfesional === idProfesional &&
      //       cita.disponible &&
      //       cita.fecha >= currentDate
      //   );
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/filtradas/disponible/profesional/${idProfesional}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerHorasDisponiblesPorDiaProfesional: async (idProfesional, fecha) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para traerHorasDisponiblesPorDiaProfesional cita en el mock
      console.log("traerHorasDisponiblesPorDiaProfesional (mock)");
      //   return mockCitas.filter(
      //     (cita) =>
      //       cita.idProfesional === idProfesional &&
      //       cita.fecha === fecha &&
      //       cita.disponible
      //   );
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/disponible/profesional/horas/${idProfesional}/${fecha}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerPrimerProfesional: async (listaProfesionales) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para traerPrimerProfesional cita en el mock
      console.log("traerPrimerProfesional (mock)");
      //   return mockCitas.filter(
      //     (cita) =>
      //       listaIdProfesionales.includes(cita.idProfesional) && cita.disponible
      //   );
    }
    
    let idsProfesionales = listaProfesionales.map(
      (profesional) => profesional.id
    );

    let queryParams = idsProfesionales
      .map((id) => `idProfesional=${id}`)
      .join("&");

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/primer-profesional?${queryParams}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerHorasPrimerProfesional: async (fecha, listaProfesionales) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para traerHorasPrimerProfesional cita en el mock
      console.log("traerHorasPrimerProfesional (mock)");
      //   return mockCitas.filter(
      //     (cita) =>
      //       listaIdProfesionales.includes(cita.idProfesional) &&
      //       cita.fecha === fecha &&
      //       cita.disponible
      //   );
    }

    let idsProfesionales = listaProfesionales.map(
      (profesional) => profesional.id
    );
    
    let queryParams = idsProfesionales
      .map((id) => `idProfesional=${id}`)
      .join("&");

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/primer-profesional/horas/${fecha}?${queryParams}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export default citasService;
