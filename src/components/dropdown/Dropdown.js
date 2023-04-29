import "./Dropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';

function Dropdown(props) {
    const [icon, setIcon] = useState(faChevronDown);
    const detailsRef = useRef(null);

    function handleClick() {

        if (!detailsRef.current.open) {
            setIcon(faChevronDown);
        } else {
            setIcon(faChevronUp);
        }

    }

    let content = props.content;
    if (typeof content === 'object') {
        content = content.map(item => {
            return (
                <span key={item} className="equipment">
                    {item}
                </span>
            )
        });
    }

    const type = (props.type === "list" ? "contentList" : "");

    /*---------------------------------------------------------------------------------*/
    const ghostClass = (props.isGhost ? "ghost" : "");
    const openByDefault = props.isGhost ? true : false;

    //Changement du state + <details> principal
    function clickEvent() {
        if (props.isOpen != null) {
            if (!props.isOpen) {
                props.setOpen(true);
            } else {
                props.setOpen(false);
            }
        }
    }
    //Changement du <details> secondaire
    if (props.isGhost) {
        if (detailsRef.current) {
            if (!props.isOpen) {
                detailsRef.current.open = true;
            } else {
                detailsRef.current.open = false;
            }
        }
    }

    /*---------------------------------------------------------------------------------*/

    return (
        <details className={"detailsBox " + ghostClass} onClick={clickEvent} onToggle={handleClick} ref={detailsRef} open={openByDefault}>
            <summary className="detailsBox_summary">
                <h2 className="summary_title">{props.title}</h2>
                <FontAwesomeIcon icon={icon} />
            </summary>
            <p className={"detailsBox_content " + type}>{content}</p>
        </details>
    )

}

export default Dropdown;