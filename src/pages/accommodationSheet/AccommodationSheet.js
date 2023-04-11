import '../Base.css';
import './AccommodationSheet.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import data from "../../data.json";
import bannerImage from "../../background1.jpg";
import { useLocation } from 'react-router-dom';

function AccommodationSheet(props) {

    const { id } = useLocation().state;
    const image = data.filter(item => item.id == id)[0].cover;

    return (
        <>
            <Navbar />
            <Banner src={image} alt="Bord de mer avec pics rocheux" height={2} />
        </>
    );
}

export default AccommodationSheet;