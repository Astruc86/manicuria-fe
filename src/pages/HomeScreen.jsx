import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel/Carrusel";

const HomeScreen = () => {  
  return (
    <>
      <Carrusel></Carrusel>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/turno">
          <button type="button" className="btn btn-outline-primary">
            Reservar turno
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;