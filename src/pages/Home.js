import banner from '../assets/banner.jpg';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Thumbnail from '../components/Thumbnail';
import Footer from '../components/Footer';

function Home(props) {
    return(
        <>
            <Header />
            <Banner image={banner} title="Chez vous, partout et ailleurs" alt="Kasa : Chez vous, partout et ailleurs.s" />
            <section className='flex-grow'>
                <div className='thumbnails-wrapper'>
                    {props.locations.map((location) => {
                        return(
                            <Thumbnail key={location.id} location={location} />
                        )
                    })}
                </div>
            </section>
            <Footer /> 
        </>
    )
}
export default Home;