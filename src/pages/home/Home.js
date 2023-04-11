import '../Base.css';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Thumb from '../../components/thumb/Thumb';
import data from "../../data.json";
import bannerImage from "../../background1.jpg";

function Home() {

    const thumbs = data.map(item => {
        return <Thumb key={item.id} id={item.id} cover={item.cover} description={item.description} title={item.title} />;
    });

    return (
        <>
            <Navbar />
            <Banner src={bannerImage} alt="Bord de mer avec pics rocheux" title="Chez vous, partout et ailleurs" height={1} />
            <div className='thumbs_wrapper'>
                <div className='thumbs_container'>
                    {thumbs}
                </div>
            </div>
        </>
    );
}

export default Home;