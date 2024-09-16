import { useUsuarioContext } from "../context/UsuarioContext";

export function useUsuario() {
  const { usuario, modificarUsuario, cerrarSesion } = useUsuarioContext();

  return {
    dni: usuario.dni,
    rol: usuario.rol,
    modificarUsuario,
    cerrarSesion
  };
}
