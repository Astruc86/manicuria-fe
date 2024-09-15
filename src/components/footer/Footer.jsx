import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../footer/footer.css";
import React from "react";
import { useEmpresa } from "../../hooks/useEmpresa";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

export default function Footer() {
  const { empresa, isLoading, isError } = useEmpresa();

  return (
    <>
      {empresa && (
        <footer className="footer">
          <div className="footer-iconos d-flex justify-content-evenly">
            <a
              href={empresa.urlFacebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icono" />
            </a>
            <a
              href={empresa.urlTwitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="icono" />
            </a>
            <a
              href={empresa.urlInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="icono" />
            </a>
          </div>
        </footer>
      )}
      {isError && <h3>Error cargando las redes sociales</h3>}
    </>
  );
}
