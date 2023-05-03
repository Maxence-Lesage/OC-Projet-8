import { Link } from "react-router-dom";
import "./Thumb.css";

function Thumb(props) {

    return (
        <Link to={"/accommodation/" + props.id}>
            <div className="thumb">
                <img className="thumb_image" src={props.cover} alt={props.description} />
                <div className="thumb_shadow"></div>
                <h3 className="thumb_title">{props.title}</h3>
            </div>
        </Link>
    );

}

export default Thumb;