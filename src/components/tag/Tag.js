import "./Tag.css";

function Tag(props) {

    return (
        <div className="tags">
            {props.tag}
        </div>
    )
}

export default Tag;