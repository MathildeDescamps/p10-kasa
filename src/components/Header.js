import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
    return (
        <div id="header">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À propos</Link>
            </div>
        </div>
    )
}

export default Header;