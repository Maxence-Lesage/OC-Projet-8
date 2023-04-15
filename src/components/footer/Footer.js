import './Footer.css';
import logo from "../../footer_logo.png";

function Footer() {

    return (
        <footer className='pageFooter'>
            <img className='pageFooter_logo' src={logo} alt="Logo de Kasa" />
            <p className='pageFooter_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;