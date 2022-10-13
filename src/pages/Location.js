import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import { useParams } from 'react-router-dom';

function Location(props) {
    const locations = props.locations;
    console.log(locations);
    const {id} = useParams();
    let currentLocation;
    locations.forEach((location) => {
        if(location.id === id) {
            currentLocation = location;
        }
    })
    return (
        <>
            <Header />
            <section className='location-page'>
                <Carousel pictures={currentLocation.pictures} />
                <h1>{currentLocation.title}</h1>
                <h2>{currentLocation.location}</h2>
                <div className='tags'>
                    {
                        currentLocation.tags.map((tag, index) => {
                            return(
                                <Tag key={`tag-${index}`} tag={tag} />
                            )
                        })
                    }
                </div>
                <p className='description'>{currentLocation.description}</p>
            </section>
            <Footer />
        </>
    )
}
export default Location;