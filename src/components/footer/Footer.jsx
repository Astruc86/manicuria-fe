import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../footer/footer.css";
import empresasService from "../../services/empresasService";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const result = await empresasService.traerId(1);
        setEmpresa(result);
      } catch (error) {
        console.error("Error fetching empresas:", error);
      }
    };

    fetchEmpresa();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-iconos d-flex justify-content-evenly">
        <a href={empresa.urlFacebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="icono" />
        </a>
        <a href={empresa.urlTwitter} target="_blank" rel="noopener noreferrer">
          <XIcon className="icono" />
        </a>
        <a href={empresa.urlInstagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="icono" />
        </a>
      </div>
    </footer>
  );
}
