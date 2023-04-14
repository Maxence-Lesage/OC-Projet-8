import "./Dropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';
import { createElement } from 'react';

function Dropdown(props) {
    const [icon, setIcon] = useState(faChevronDown);
    const detailsRef = useRef(null);

    function handleClick() {

        if (detailsRef.current.open) {
            setIcon(faChevronDown);
        } else {
            setIcon(faChevronUp);
        }
    }

    let content = props.content;
    if (typeof content === 'object') {
        content = content.map(item => {
            return createElement(
                'p',
                { className: 'equipment' },
                item
            )
        });
    }

    return (
        <details className="detailsBox" onClick={handleClick} ref={detailsRef}>
            <summary className="detailsBox_summary">
                <h2 className="summary_title">{props.title}</h2>
                <FontAwesomeIcon icon={icon} />
            </summary>
            <p className={"detailsBox_content " + (props.type === "list" ? "contentList" : "")}>{content}</p>
        </details>
    )

}

export default Dropdown;