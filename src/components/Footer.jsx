import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"
import "../index.css"



export default function Footer() {
  return (
    <footer className='footer '>
      <div className="footer-iconos mt-5 d-flex justify-content-evenly ">
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon className='icono' />
        </a><a href="https://twitter.com/" target="_blank">
          <XIcon className='icono' />
        </a><a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon className='icono' />
        </a>
      </div>
    </footer >
  )
}