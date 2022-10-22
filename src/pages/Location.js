import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';

import { useParams } from 'react-router-dom';

function Location(props) {
    const locations = props.locations;
    const {id} = useParams();
    let currentLocation;
    locations.forEach((location) => {
        if(location.id === id) {
            currentLocation = location;
        }
    });
    console.log(currentLocation);
    return (
        <>
            <Header />
            <section className='location-page'>
                <Carousel pictures={currentLocation.pictures} />
                <h1>{currentLocation.title}</h1>
                <h2>{currentLocation.location}</h2>
                <div className='tags'>
                    {
                        currentLocation.tags.map((tag, index) => <Tag key={`tag-${index}`} tag={tag} />)
                    }
                </div>
                <div className='rating-host'>
                    <div className='rating'>
                        <Rating rating={currentLocation.rating} />
                    </div>
                    <div className='host'>
                        <p className='name'>{currentLocation.host.name}</p>
                        <div className='picture' style={{ background: `url(${currentLocation.host.picture})` }}></div>
                    </div>
                </div>
                <Dropdown name="Description" content={currentLocation.description} />
                <Dropdown name="Equipements" content={currentLocation.equipments} />
            </section>
            <Footer />
        </>
    )
}
export default Location;