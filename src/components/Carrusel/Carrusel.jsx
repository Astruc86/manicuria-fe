import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import { useEmpresa } from "../../hooks/useEmpresa";

const Carrusel = () => {
  // Obtiene la lista de imágenes del hook personalizado `useEmpresa`
  const { listaCarrusel, isLoading: isLoadingEmpresa, isError } = useEmpresa();
  const [isLoading, setIsLoading] = useState(true); // Estado que maneja si las imágenes están cargando

  // Efecto para cargar imágenes y controlar el estado de carga
  useEffect(() => {
    if (!isLoadingEmpresa && listaCarrusel?.length > 0) {
      const loadImages = async () => {
        // Crea promesas para cargar cada imagen
        const promises = listaCarrusel.map((item) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = item.url;
            img.onload = resolve; // Resuelve la promesa cuando la imagen se carga correctamente
            img.onerror = resolve; // Resuelve incluso si hay un error (para no detener la carga)
          });
        });

        // Espera a que todas las imágenes se carguen
        await Promise.all(promises);
        setIsLoading(false); // Cambia el estado de carga cuando todas las imágenes se han cargado
      };

      loadImages();
    }
  }, [listaCarrusel, isLoadingEmpresa]); // El efecto depende de `listaCarrusel` y `isLoadingEmpresa`

  // Muestra un mensaje de error si hay un problema al cargar los datos
  if (isError) {
    return <h3>Error cargando las imágenes</h3>;
  }

  return (
    <>
      {/* Componente Carousel de react-bootstrap */}
      <Carousel className="d-flex carrusel">
        {/* Recorre la lista de imágenes y crea un elemento de carrusel para cada una */}
        {listaCarrusel?.length > 0 &&
          listaCarrusel.map((item) => (
            <Carousel.Item
              key={item.id} 
              className={`carousel-item-custom ${isLoading ? "loading" : ""}`} 
              // Aplica la clase "loading" si las imágenes todavía se están cargando
            >
              {isLoading ? (
                // Mientras carga, muestra el fondo de carga
                <div className="loading-background"></div>
              ) : (
                // Si las imágenes ya están cargadas, muestra la imagen
                <img
                  className="d-block w-100 carousel-image"
                  src={item.url}
                  alt={item.alt}
                />
              )}
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default Carrusel;