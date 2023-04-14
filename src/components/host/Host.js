import "./Host.css";

function Host(props) {

    const name = props.name.split(" ");

    return (
        <div className="host">
            <div className="host_left">
                <p className="host_name">{name[0]}</p>
                <p className="host_name">{name[1]}</p>
            </div>
            <div className="host_right">
                <img className="host_image" src={props.img} alt={"Photo de " + props.name} />
            </div>
        </div>
    );

}

export default Host;