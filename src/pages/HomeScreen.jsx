import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel/Carrusel";
import { BotonPrimario } from "../components/botones/BotonPrimario";

const HomeScreen = () => {
  return (
    <div className="container-home">
      <Carrusel></Carrusel>
      {/* <div className="d-flex justify-content-center mt-5">
        <Link to="/turno">
          <BotonPrimario tipo="reservar" className='btn-home'/>
        </Link>
      </div> */}

      <h2>Servicios</h2>
      <div style={{display:"flex", flexDirection:'row', width:'100%'}} className="servicios" >
        <img src="/img/uñas.jpg" alt="" />
        <img src="/img/uñas (2).jpg" alt="" />
        <img src="/img/uñas (1).png" alt="" />

      </div>
    </div>
  );
};

export default HomeScreen;
