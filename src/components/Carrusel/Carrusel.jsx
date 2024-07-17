import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import empresasService from "../../services/empresasService";

const Carrusel = () => {
  const [listaCarrusel, setListaCarrusel] = useState([]);

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const result = await empresasService.traerId(1);
        setListaCarrusel(result.listaCarrusel);
      } catch (error) {
        console.error("Error fetching empresas:", error);
      }
    };

    fetchEmpresa();
  }, []);

  return (
    <Carousel className="d-flex align-items-center justify-content-center ">
      {listaCarrusel.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.url} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
