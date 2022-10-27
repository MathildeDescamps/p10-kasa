function Banner(props) {
    let className = "banner ";
    if(props.class) {
        className = className + props.class;
    }
    return(
        <div className={className}>
            <img src={props.image} alt={props.alt} className='banner-img' />
            {props.title ? <h1>{props.title}</h1> : ""}
        </div>
    )
}
export default Banner;