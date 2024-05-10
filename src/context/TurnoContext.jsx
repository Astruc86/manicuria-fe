import { createContext } from "react";

export const TurnoContext = createContext();
export const TurnoProvider = ({ children }) => {
    const [selectedValues, setSelectedValues] = useState({
      servicio: "",
      profesional: "",
      dia: "",
      hora: "",
    });
  
    return (
      <TurnoContext.Provider value={{ selectedValues, setSelectedValues }}>
        {children}
      </TurnoContext.Provider>
    );
  };