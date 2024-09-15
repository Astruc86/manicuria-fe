import { useState, useEffect } from "react";

export function useCambioTamañoPantalla(isCliente) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const iniciarSesionMain = document.querySelector(".iniciar-sesion");

    if (!iniciarSesionMain) return;

    const iniciarSesionImg = document.querySelector(".iniciar-sesion-img");
    const iniciarSesionForm = document.querySelector(".iniciar-sesion-form");
    const newWidth = iniciarSesionMain?.offsetWidth;
    setWindowWidth(newWidth);

    if (newWidth > 500 && windowWidth > 500) return;
    if (newWidth <= 500 && windowWidth <= 500) return;

    if (newWidth > 500) {
      iniciarSesionMain.classList.remove("small-screen");

      iniciarSesionMain.classList.remove("show-client", "show-company");
      iniciarSesionMain.classList.add(
        isCliente ? "show-client" : "show-company"
      );

      iniciarSesionImg.style.transition = "none";
      iniciarSesionForm.style.transition = "none";

      if (!isCliente) {
        iniciarSesionImg.style.transform = "translateX(100%)";
        iniciarSesionForm.style.transform = "translateX(-100%)";
      } else {
        iniciarSesionImg.style.transform = "translateX(0)";
        iniciarSesionForm.style.transform = "translateX(0)";
      }
    } else {
      iniciarSesionMain.classList.add("small-screen");

      iniciarSesionMain.classList.remove("show-client");
      iniciarSesionMain.classList.remove("show-company");

      iniciarSesionImg.style.transition = "none";
      iniciarSesionForm.style.transition = "none";
      iniciarSesionImg.style.transform = "translateX(0)";
      iniciarSesionForm.style.transform = "translateX(0)";
    }

    setTimeout(() => {
      iniciarSesionImg.style.removeProperty("transition");
      iniciarSesionImg.style.removeProperty("transform");

      iniciarSesionForm.style.removeProperty("transition");
      iniciarSesionForm.style.removeProperty("transform");
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, isCliente]);

  return { windowWidth };
}
