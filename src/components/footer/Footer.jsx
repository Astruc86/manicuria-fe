import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import data from "../../json/empresa.json";
import "../footer/footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-iconos d-flex justify-content-evenly">
        <a href={data.urlFacebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon className='icono' />
        </a>
        <a href={data.urlTwitter} target="_blank" rel="noopener noreferrer">
          <XIcon className='icono' />
        </a>
        <a href={data.urlInstagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon className='icono' />
        </a>
      </div>
    </footer>
  );
}