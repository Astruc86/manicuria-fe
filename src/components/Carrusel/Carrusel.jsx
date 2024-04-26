import React from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import data from "../../json/listaCarrusel.json";

const Carrusel = () => {
  return (
    <Carousel className="d-flex align-items-center justify-content-center">
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.url}
            alt={item.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;