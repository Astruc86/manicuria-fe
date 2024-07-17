import React, { createContext, useState, useContext } from 'react';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    //0: cliente, 1: empresa, 2:clienteLogueado
    const [usuario, setUsuario] = useState(0);

    return (
        <UsuarioContext.Provider value={{
            usuario,
            setUsuario
        }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export const useUsuarioContext = () => useContext(UsuarioContext);

export const useUsuario = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext);
    return { usuario, setUsuario };
};
