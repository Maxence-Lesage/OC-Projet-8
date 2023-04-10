import '../Base.css';
import './About.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import bannerImage from "../../background2.jpg";

function About() {

    return (
        <>
            <Navbar />
            <Banner src={bannerImage} alt="Montagnes recouverte d'une forêt en premier plan avec en fond montagnes rocheuses" title=" " height={1} />
        </>
    );
}

export default About;