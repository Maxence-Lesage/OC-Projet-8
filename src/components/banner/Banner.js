import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Banner(props) {

    const titleBackground = (props.title ? "title_background" : "");
    const bannerSize = (props.height === 1 ? "banner_any" : "banner_accommodation")

    let images;
    if (typeof props.src === 'object') {
        images = props.src;
    } else {
        images = [props.src]
    }

    const [counter, setCounter] = useState(0);

    function plus() {
        setCounter(counter + 1);
        if (counter >= (images.length - 1)) {
            setCounter(0);
        }
    }

    function moins() {
        setCounter(counter - 1);
        if (counter <= 0) {
            setCounter((images.length - 1));
        }
    }

    return (
        <div className={"banner " + bannerSize}>
            <img className="banner_image" src={images[counter]} alt={props.alt} />
            <div className={titleBackground}>
                <h1 className="banner_title">{props.title}</h1>
            </div>
            {(images.length <= 1 ? null : <button onClick={moins}><FontAwesomeIcon className="arrow arrow_left" icon={faChevronLeft} /></button>)}
            {(images.length <= 1 ? null : <button onClick={plus}><FontAwesomeIcon className="arrow arrow_right" icon={faChevronRight} /></button>)}
        </div>
    );

}

export default Banner;