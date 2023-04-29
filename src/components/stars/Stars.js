import "./Stars.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Stars(props) {

    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<FontAwesomeIcon key={i} className={"star " + (props.nbr > i ? "valid" : "")} icon={faStar} />);
    }

    return (
        <div className="stars">
            {stars}
        </div>
    );
}

export default Stars;