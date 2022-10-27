import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
    return(
        <section className='not-found-page'>
            <Header />
            <div>
                <h1>404</h1>
                <p>Oups! La page que<br/>vous demandez n'existe pas.</p>
                <Link to={{ pathname: '/' }} >Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
        </section>
    )
}
export default NotFound;