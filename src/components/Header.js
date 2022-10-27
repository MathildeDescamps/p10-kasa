import {Link} from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
    return (
        <div id="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="logo"/>
            </Link>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À propos</Link>
            </div>
        </div>
    )
}

export default Header;