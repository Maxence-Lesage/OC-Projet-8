import "./Thumb.css";

function Thumb(props) {

    return (
        <div className="thumb">
            <img className="thumb_image" src={props.cover} alt={props.description} />
            <h3 className="thumb_title">{props.title}</h3>
        </div>
    );

}

export default Thumb;