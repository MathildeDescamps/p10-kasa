import Header from '../components/Header';
import Banner from '../components/Banner';
import Thumbnail from '../components/Thumbnail';
import Footer from '../components/Footer';

function Home(props) {
    return(
        <>
            <Header />
            <Banner />
            {props.locations.map((location) => {
                return(
                    <Thumbnail key={location.id} location={location} />
                )
            })}
            <Footer /> 
        </>
    )
}
export default Home;