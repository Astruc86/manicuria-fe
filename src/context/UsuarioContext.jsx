import { createContext, useState, useContext } from "react";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  //0: cliente, 1: empresa, 2:clienteLogueado
  const [usuario, setUsuario] = useState({ dni: "", rol: 0 });
  const modificarUsuario = (nuevoUsuario) => {
    if (!nuevoUsuario.dni || !nuevoUsuario.rol) return;
    setUsuario(nuevoUsuario);
  };

  const cerrarSesion = () => {
    setUsuario({ dni: "", rol: 0 });
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        modificarUsuario,
        cerrarSesion,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuarioContext = () => useContext(UsuarioContext);
