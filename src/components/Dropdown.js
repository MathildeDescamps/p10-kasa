function Dropdown(props) {
    let name = props.name;
    let content = props.content;
    console.log(props);
    //Function called when user clicks on a dropdown, to show/hide content
    function toggleDropdown(e){
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
    return(
        <>
            <button onClick={toggleDropdown} className="accordion">{name}</button>
            <div className="panel">
                {typeof content === "object" ? 
                    <div  className="multiple-content">
                        {content.map((contentItem, index) => {
                            return (
                                <div  className="content-item" key={`contentItem-${index}`}>
                                    <span>{contentItem}</span>
                                    <br/>
                                </div>
                            )
                        })}
                    </div>
                :
                    <p>{content}</p>
                }
            </div>
        </>
    );
}
export default Dropdown;