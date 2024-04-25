import React from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";

const Carrusel = () => {
  return (
    <Carousel className="d-flex align-items-center justify-content-center">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/manicuria-imagenes.appspot.com/o/carousel%2Fimagen1.jpg?alt=media&token=4b7425e5-5c35-4cd3-8862-4b31ff54d152"
          alt="Descripción de la imagen 1"
        />
        <Carousel.Caption>
          <h3>Título de la imagen 1</h3>
          <p>Descripción breve de la imagen 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/manicuria-imagenes.appspot.com/o/carousel%2Fimagen2.jpg?alt=media&token=49d2bef6-1f29-4c18-8b76-32fba3478799"
          alt="Descripción de la imagen 2"
        />
        <Carousel.Caption>
          <h3>Título de la imagen 2</h3>
          <p>Descripción breve de la imagen 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/manicuria-imagenes.appspot.com/o/carousel%2Fimagen3.jpg?alt=media&token=9d8097db-4656-4b49-b8ed-793a098c7048"
          alt="Descripción de la imagen 3"
        />
        <Carousel.Caption>
          <h3>Título de la imagen 3</h3>
          <p>Descripción breve de la imagen 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
