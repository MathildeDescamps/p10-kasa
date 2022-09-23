import '../styles/Thumbnail.css';

function Thumbnail(props) {
    let place = props.place;
    return(
        <article className="thumbnail">
            <div className="cover" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('+place.cover+')' }} alt={"Aperçu de : " + place.title} />
        </article>
    )
}
export default Thumbnail;