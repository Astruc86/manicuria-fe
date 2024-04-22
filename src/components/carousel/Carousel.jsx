import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/imagen1.webp"
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
          src="./assets/imagen2.jpg"
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
          src="./assets/imagen3.jpg"
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

export default MyCarousel;
