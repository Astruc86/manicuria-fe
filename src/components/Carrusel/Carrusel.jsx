import React from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import { useEmpresa } from "../../hooks/useEmpresa";
import CircularIndeterminate from "../Progress/CircularIndeterminate";


const Carrusel = () => {
  const { listaCarrusel, isLoading, isError } = useEmpresa();

  return (
    <>
      {listaCarrusel?.length > 0 && (
        <Carousel className="d-flex carrusel ">
          {/* {listaCarrusel?.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.url} alt={item.alt} />
            </Carousel.Item>
          ))} */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carrusel/carrusel (1).svg"
              alt="alt1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carrusel/carrusel (2).svg"
              alt="alt1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carrusel/carrusel (3).svg"
              alt="alt1"
            />
          </Carousel.Item>
        </Carousel>
      )}
      {isLoading && <CircularIndeterminate></CircularIndeterminate>}
      {isError && <h1>Error cargando las imágenes</h1>}
    </>
  );
};

export default Carrusel;
