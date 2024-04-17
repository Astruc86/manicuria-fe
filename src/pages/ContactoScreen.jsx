import { useEffect, useState } from "react"
import { InformacionContacto } from "../components/InformacionContacto"
import "../styles/ContactoSreen.css"

export const ContactoScreen = () => {

  /*
  const [info, setInfo] = useState([])

  const fetchInfo = async () => {
    const response = await fetch()
    const data = await response.json()
    setInfo(data)

  }

  useEffect(() => {
    fetchInfo()
  }, [])
*/
  return (
    <>
      <h1 className="tituloPages">Contacto</h1>
      <InformacionContacto></InformacionContacto>

    </>
    
  )
}
