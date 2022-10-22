function Banner(props) {
    return(
        <div className='banner'>
            <img src={props.image} alt={props.alt} className='banner-img' />
            {props.title ? <h1>{props.title}</h1> : ""}
        </div>
    )
}
export default Banner;