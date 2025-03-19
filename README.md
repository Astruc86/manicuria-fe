# MIA - Gestión de Turnos para Manicuría  

MIA es una aplicación web diseñada para la gestión eficiente de turnos en un centro de manicuría. Permite a los usuarios reservar turnos, administrar citas y gestionar disponibilidad de servicios de manera sencilla.

## Tecnologías Utilizadas
- Frontend: React + Vite
- Backend: Java + Spring Boot
- Base de Datos: MySQL
- Almacenamiento de Imágenes: Firebase

## Repositorios  
El código del proyecto está dividido en dos repositorios:
- Frontend: [Repositorio de MIA Frontend](https://github.com/Astruc86/manicuria-fe)
- Backend: [Repositorio de MIA Backend](https://github.com/lopezsol/manicuria-be)

## Deploy

La aplicación está desplegada en Netlify y puede accederse desde:
https://mia-manicuria.netlify.app

## Configuración del Frontend

Para ejecutar el frontend localmente, es necesario configurar las variables de entorno en un archivo .env dentro del proyecto del frontend:
```
# Define el entorno (development, production, mock)
VITE_ENVIRONMENT=development
```
## Instalación y Ejecución

### Frontend

1. Clonar el repositorio
`git clone https://github.com/Astruc86/manicuria-fe.git`
2. Instalar dependencias:
`npm install`
3. Ejecutar el proyecto:
`npm run dev`

### Backend
1. Clonar el repositorio
`git clone https://github.com/lopezsol/manicuria-be.git`
2. Crear una base de datos local en MySQL.
3. Configurar la base de datos en application.properties.
4. Configurar el archivo .env
5. Ejecutar primero el servicio de eureka-sv
6. Ejecutar los demás.
