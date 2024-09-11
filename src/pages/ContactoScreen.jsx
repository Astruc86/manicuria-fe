import { InformacionContacto } from "../components/informacionContacto/InformacionContacto";
import "../styles/contactoScreen.css";

const ContactoScreen = () => {
  return (
    <div className="container">
      <header className="contacto">
        <h1>Contactanos</h1>
      </header>
      <InformacionContacto/>
    </div>
  );
};

export default ContactoScreen;
