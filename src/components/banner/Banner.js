import "./Banner.css";

function Banner(props) {

    const titleBackground = (props.title ? "title_background" : "");
    const bannerSize = (props.height === 1 ? "banner_any" : "banner_accommodation")

    return (
        <div className={"banner " + bannerSize}>
            <img className="banner_image" src={props.src} alt={props.alt} />
            <div className={titleBackground}>
                <h1 className="banner_title">{props.title}</h1>
            </div>
        </div>
    );

}

export default Banner;