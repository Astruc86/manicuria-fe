import { createContext, useState, useContext } from "react";
export const usuarioInitialState = JSON.parse(
  window.sessionStorage.getItem("usuario")
) || { dni: "", rol: 0 };

export const actualizarSessionStorage = (usuario) => {
  window.sessionStorage.setItem("usuario", JSON.stringify(usuario));
};
const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  //0: cliente, 1: empresa, 2:clienteLogueado
  const [usuario, setUsuario] = useState(usuarioInitialState);

  const modificarUsuario = (nuevoUsuario) => {
    if (!nuevoUsuario.dni || !nuevoUsuario.rol) return;
    actualizarSessionStorage(nuevoUsuario)
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
