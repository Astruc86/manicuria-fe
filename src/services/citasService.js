import config from "../config";
import mockCitas from "../json/citas.json";

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

const ordenarHoras = (citas) => {
  return citas.sort((a, b) => {
    if (a.hora < b.hora) return -1;
    if (a.hora > b.hora) return 1;
    return 0;
  });
};

const citasService = {
  crear: async (citaData) => {
    if (config.useMockData) {
      //To do: Aquí debería ir la lógica para crear una cita en el mock
      console.log("Crear profesional (mock)");
      return;
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
    if (response.status == 404) return [];
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
      return;
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
      return;
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
      return mockCitas.filter(
        (cita) => cita.profesionalesDisponibles === idProfesional
      );
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/disponible/profesional/${idProfesional}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerFiltradasDisponiblesPorProfesional: async (idProfesional) => {
    if (config.useMockData) {
      const fechaActual = getFechaActualString();
      const horaActual = getHoraActual();
      const citasFiltradas = mockCitas.filter(
        (cita) =>
          cita.profesionalesDisponibles.includes(idProfesional) &&
          (cita.fecha > fechaActual ||
            (cita.fecha === fechaActual && cita.hora >= horaActual))
      );

      return ordenarHoras(citasFiltradas);
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/filtradas/disponible/profesional/${idProfesional}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerHorasDisponiblesPorDiaProfesional: async (fecha, idProfesional) => {
    if (config.useMockData) {
      const horaActual = getHoraActual();
      const fechaActual = getFechaActualString();

      const citasFiltradas = mockCitas.filter(
        (cita) =>
          cita.profesionalesDisponibles.includes(idProfesional) &&
          (fecha == fechaActual
            ? cita.fecha === fecha && cita.hora >= horaActual
            : cita.fecha === fecha)
      );

      let citaHora = [];
      for (let i = 0; i < citasFiltradas.length; i++) {
        let hora = {
          id: i,
          hora: citasFiltradas[i].hora,
        };
        citaHora.push(hora);
      }

      return ordenarHoras(citaHora);
    }
    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/traer/disponible/profesional/horas/${idProfesional}/${fecha}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerPrimerProfesional: async (listaProfesionales) => {
    if (config.useMockData) {
      const horaActual = getHoraActual();
      const fechaActual = getFechaActualString();

      let idsProfesionales = listaProfesionales.map(
        (profesional) => profesional.id
      );
      const citasFiltradas = mockCitas.filter(
        (cita) =>
          idsProfesionales.some((id) =>
            cita.profesionalesDisponibles.includes(id)
          ) &&
          (cita.fecha > fechaActual ||
            (cita.fecha === fechaActual && cita.hora >= horaActual))
      );
      return ordenarHoras(citasFiltradas);
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
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },

  traerHorasPrimerProfesional: async (fecha, listaProfesionales) => {
    if (config.useMockData) {
      const horaActual = getHoraActual();
      const fechaActual = getFechaActualString();

      let idsProfesionales = listaProfesionales.map(
        (profesional) => profesional.id
      );

      const citasFiltradas = mockCitas.filter((cita) =>
        idsProfesionales.some(
          (id) =>
            cita.profesionalesDisponibles.includes(id) &&
            (fecha == fechaActual
              ? cita.fecha === fecha && cita.hora >= horaActual
              : cita.fecha === fecha)
        )
      );

      let citaHora = [];
      for (let i = 0; i < citasFiltradas.length; i++) {
        let profesionales = citasFiltradas[i].profesionalesDisponibles.filter(
          (id) => idsProfesionales.includes(id)
        );
        let hora = {
          id: i,
          hora: citasFiltradas[i].hora,
          listaProfesionales: profesionales,
        };
        citaHora.push(hora);
      }

      return ordenarHoras(citaHora);
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
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
  traerPorProfesionalFechaHora: async (fecha, idProfesional, hora) => {
    if (config.useMockData) {
      return mockCitas.find(
        (cita) =>
          cita.hora == hora &&
          cita.fecha == fecha &&
          cita.profesionalesDisponibles.includes(idProfesional)
      );
    }

    const response = await fetch(
      `${config.citasApiBaseUrl}/citas/filtrar/profesional-fecha-hora?idProfesional=${idProfesional}&fecha=${fecha}&hora=${hora}`
    );
    if (response.status == 404) return [];
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
};

export default citasService;
