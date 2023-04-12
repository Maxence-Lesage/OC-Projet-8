import { Link } from "react-router-dom";
import '../Base.css';
import './Error404.css';
import Navbar from '../../components/navbar/Navbar';

function Error404() {

    return (
        <>
            <Navbar />
            <div className="errorMessage">
                <p className="errorMessage_code">404</p>
                <h1 className="errorMessage_text">Oups! La page que vous demandez n'existe pas.</h1>
                <h2 className="backToHome"><Link className="link" to={"/"}>Retourner sur la page d'accueil</Link></h2>
            </div>
        </>
    );
}

export default Error404;