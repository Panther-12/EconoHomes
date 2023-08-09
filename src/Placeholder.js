import Card from "./Card";

const Placeholder = (props) =>{
    const placeholderStyles={
        "height": "400px",
        "border":"1px solid black",
        "padding":"10px"
    }
    const cardContentStyles = {
        "height":"100%",
        "padding":"10px"
    }
    const drop = (e)=>{
        e.preventDefault();

        // Get the drag contents and the drag container id
        var _dragComponentId = e.dataTransfer.getData("text");
        var _dragSpaceId = localStorage.getItem("dragSpace");

        // Store a copy of the card in the drop space
        var _replaceSpace = document.getElementById(_dragSpaceId)
        let _replaceElement = document.getElementById(e.target.id)
        let _replaceElementCopy = _replaceElement.cloneNode(true)

        // Drop the dragged card to the drop space then replace the drag space with the drop space card 
        e.target.appendChild(document.getElementById(_dragComponentId));
        if(e.target.childNodes.length > 1){
            e.target.removeChild(e.target.firstElementChild);
        }
        _replaceSpace.appendChild(_replaceElementCopy)
    }
    const dragOver = (e)=>{
        e.preventDefault()
    }
    return(
        <div className="col-6">
            <div className="card-wrapper p-6 bg-dark" style={placeholderStyles}>
                <div className="card-wrapper-content" id={props.index} style={cardContentStyles} onDrop={(event)=>drop(event)} onDragOver={(event)=>dragOver(event)}>
                    <Card index={props.index} />
                </div>
            </div>
        </div>
    )
}


export default Placeholder;