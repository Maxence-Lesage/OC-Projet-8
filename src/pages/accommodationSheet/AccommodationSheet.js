import '../Base.css';
import './AccommodationSheet.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';
import Host from '../../components/host/Host';
import Stars from '../../components/stars/Stars';
import data from "../../data.json";
import Footer from '../../components/footer/Footer';
import Tag from '../../components/tag/Tag';
import { Navigate, useParams } from 'react-router-dom';

function AccommodationSheet() {

    const { id } = useParams();
    const accData = data.filter(item => item.id === id)[0];
    if (!accData) {
        return <Navigate to="/404" replace />;
    }
    const image = accData.pictures;
    const title = accData.title;
    const location = accData.location;
    const tags = accData.tags.map(tag => {
        return (
            <Tag key={tag} tag={tag} />
        )
    });

    // const math = Math.random();
    return (
        <>
            <Navbar />
            <Banner src={image} alt={title} height={2} />

            <div className="accommodation_wrapper">
                <div className="wrapper_left">
                    <h1 className="accommodation_title">{title}</h1>
                    <div className="accommodation_location">{location}</div>
                    <div className="tags_list">{tags}</div>
                </div>
                <div className="wrapper_right">
                    <Host img={accData.host.picture} name={accData.host.name} />
                    <Stars nbr={accData.rating} />
                </div>
            </div>
            <div className="dropdowns">
                <div className='dropdown'>
                    <Dropdown key="Dropdown-1" id="Dropdown-1" title="Description" content={accData.description} />
                </div>
                <div className='dropdown'>
                    <Dropdown key="Dropdown-2" id="Dropdown-2" title="Équipement" content={accData.equipments} type="list" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AccommodationSheet;