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
import { useLocation } from 'react-router-dom';

function AccommodationSheet(props) {

    const { id } = useLocation().state;
    const accData = data.filter(item => item.id === id)[0];
    const image = accData.pictures;
    const title = accData.title;
    const location = accData.location;
    const tags = accData.tags.map(tag => {
        return (
            <Tag tag={tag} />
        )
    });

    return (
        <>
            <Navbar />
            <Banner src={image} alt={title} height={2} />

            <div className="accommodation_wrapper">
                <div className="wrapper_left">
                    <h1 className="accommodation_title">{title}</h1>
                    <div className="accommodation_location">{location}</div>
                    <div className="tags_list" key={accData.id}>{tags}</div>
                </div>
                <div className="wrapper_right">
                    <Host img={accData.host.picture} name={accData.host.name} />
                    <Stars nbr={accData.rating} />
                </div>
            </div>
            <div className="dropdowns">
                <div className='dropdown'>
                    <Dropdown key="Dropdown-1" title="Description" content={accData.description} />
                </div>
                <div className='dropdown'>
                    <Dropdown key="Dropdown-2" title="Équipement" content={accData.equipments} type="list" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AccommodationSheet;