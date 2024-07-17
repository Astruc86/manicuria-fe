const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {
    empresasApiBaseUrl: 'http://localhost:8081',
    serviciosApiBaseUrl: 'http://localhost:8083',
    profesionalesApiBaseUrl: 'http://localhost:8085',
    imagenesApiBaseUrl: 'http://localhost:8087',
    citasApiBaseUrl: 'http://localhost:8089',
    turnosApiBaseUrl: 'http://localhost:8091',
    useMockData: false,
  },
  production: {
    empresasApiBaseUrl: 'http://tu-servidor-remoto.com:8081',
    serviciosApiBaseUrl: 'http://tu-servidor-remoto.com:8083',
    profesionalesApiBaseUrl: 'http://tu-servidor-remoto.com:8085',
    imagenesApiBaseUrl: 'http://tu-servidor-remoto.com:8087',
    citasApiBaseUrl: 'http://tu-servidor-remoto.com:8089',
    turnosApiBaseUrl: 'http://tu-servidor-remoto.com:8091',
    useMockData: false,
  },
  mock: {
    useMockData: true,
  },
};

export default config[environment];
