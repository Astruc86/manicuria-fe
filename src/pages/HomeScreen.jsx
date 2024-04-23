import React from "react";
import { Link } from "react-router-dom";


export const HomeScreen = () => {
  return (
    <>
      <h1>HomeScreen</h1>
      <hr />

      <div className="d-grid gap-2 col-2 mx-auto">
      <Link to="/turno">
          <button type="button" className="btn btn-outline-primary">
            Reservar turno
          </button>
        </Link>
      </div>
    </>
  );
};
