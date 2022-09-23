import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
    return (
        <div id="header">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            <div className="links">
                <a href="/">Accueil</a>
                <a href="/">À propos</a>
            </div>
        </div>
    )
}

export default Header;