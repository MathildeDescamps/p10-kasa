import logo from "../assets/logo_black.png";

function Footer() {
    return (
        <div id="footer">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer;