import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../logo.png";

function Navbar() {
    const currentPath = window.location.pathname;
    const homeClass = (currentPath === "/" ? "link current_page" : "link");
    const aboutClass = (currentPath === "/about" ? "link current_page" : "link");

    return (
        <nav className="main_navbar">
            <img className="navbar_logo" src={logo} alt="Logo de Kasa" />
            <ul className="nav_links">
                <li><Link className={homeClass} to={"/"}>Accueil</Link></li>
                <li><Link className={aboutClass} to={"/about"}>À propos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;