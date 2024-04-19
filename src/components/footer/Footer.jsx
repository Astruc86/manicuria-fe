import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../footer/footer.css"
import data from "../../json/empresa.json"

export default function Footer() {
  return (
    <footer className='footer '>
      <div className="footer-iconos mt-5 d-flex justify-content-evenly ">
        <a href={data.urlFacebook} target="_blank">
          <FacebookIcon className='icono' />
        </a><a href={data.urlTwitter} target="_blank">
          <XIcon className='icono' />
        </a><a href={data.urlInstagram} target="_blank">
          <InstagramIcon className='icono' />
        </a>
      </div>
    </footer >
  )
}