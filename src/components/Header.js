import {Link, useLocation} from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
    let location = useLocation();
    console.log(location);

    return (
        <div id="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="logo"/>
            </Link>
            <div className="links">
                <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
                <Link to="/a-propos" className={`${location.pathname === "/a-propos" ? "active" : ""}`}>À propos</Link>
            </div>
        </div>
    )
}

export default Header;