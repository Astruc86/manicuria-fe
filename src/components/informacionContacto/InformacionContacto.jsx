import "./informacionContacto.css"
import data from "../../json/empresa.json"

export const InformacionContacto = () => {
  return (
    <div className="tarjeta">
      <div>
        <h3 className="tituloInformacion">Teléfono</h3>
        <p>{data.telefono}</p>
        <h3 className="titituloInformaciontulo">Dirección</h3>
        <p>{data.direccion}</p>
        <h3 className="titulo">Horarios</h3>
        <p>{data.horarios[0]}</p>
        <p>{data.horarios[1]}</p>
      </div>
    </div>
  )
}
