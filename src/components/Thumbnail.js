import {Link} from "react-router-dom";

function Thumbnail(props) {
    let location = props.location;
    return(
        <Link to={{ pathname: `/location/${location.id}` }} >
            <article className="thumbnail" id={location.id}>
                <div className="cover" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('+location.cover+')' }}>
                    <p className="title">{location.title}</p>
                </div>
            </article>
        </ Link>
    )
}
export default Thumbnail;