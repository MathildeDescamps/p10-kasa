import banner from '../assets/banner.jpg';

function Banner() {
    return(
        <div className='banner'>
            <img src={banner} alt="Kasa : Chez vous, partout et ailleurs." className='banner-img' />
            <h1>Chez vous,<br/>partout et ailleurs</h1>
        </div>
    )
}
export default Banner;