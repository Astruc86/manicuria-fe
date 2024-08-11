import { useState, useRef, useEffect } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleOpen = (event) => {
    // Guarda el elemento que activó la apertura del modal
    if (event && event.currentTarget) {
      triggerRef.current = event.currentTarget;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Devuelve el foco al elemento que activó el modal
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  useEffect(() => {
    if (open) {
      // Cuando el modal se abre, mueve el foco al primer elemento interactivo
      const firstFocusableElement = document.querySelector(
        "[role='dialog'] button, [role='dialog'] input"
      );
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [open]);

  return {
    open,
    handleOpen,
    handleClose,
  };
};

export default useModal;
