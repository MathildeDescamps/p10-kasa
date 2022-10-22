import ReactStars from "react-rating-stars-component";

function Rating(props) {
    let rating = parseInt(props.rating);
    const starsRating = {
        count: 5,
        value: rating,
        a11y: false,
        isHalf: false,
        edit: false,
        emptyIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/></svg>,
        filledIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/></svg>,
    };
    return(
        <ReactStars {...starsRating} />
    )
}
export default Rating;