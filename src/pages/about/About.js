import '../Base.css';
import './About.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import bannerImage from "../../background2.jpg";
import Footer from '../../components/footer/Footer';
import Dropdown from '../../components/dropdown/Dropdown';

function About() {

    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <>
            <Navbar />
            <Banner src={bannerImage} alt="Montagnes recouverte d'une forêt en premier plan avec en fond montagnes rocheuses" title=" " height={1} />
            <div className="about_dropdowns">
                <div className='about_dropdown'>
                    <Dropdown key="About-Dropdown-1" title="Fiabilité" content={fiabilite} />
                </div>
                <div className='about_dropdown'>
                    <Dropdown key="About-Dropdown-1" title="Respect" content={respect} />
                </div>
                <div className='about_dropdown'>
                    <Dropdown key="About-Dropdown-1" title="Service" content={service} />
                </div>
                <div className='about_dropdown'>
                    <Dropdown key="About-Dropdown-1" title="Sécurité" content={securite} isParent={true} />
                    <Dropdown key={"About-Dropdown-1-ghost"} title="Sécurité" content={securite} isGhost={true} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;