import '../css/accomodation.css'
import '../css/main.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import annonces from '../data/annonces'
import Header from "../components/Header";
import Slider from "../components/Carousel"
import Footer from "../components/Footer";
import Collapse from '../components/Collapse';
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';


export default function Accomodation() {

    const [imageSlider, setImageSlider] = useState([]);

    const idAccomodation = useParams('id').id;
    const dataCurrentAccomodation = annonces.filter(data => data.id === idAccomodation);

    useEffect(() => {
        const dataCurrentAccomodation = annonces.filter(data => data.id === idAccomodation);
        setImageSlider(dataCurrentAccomodation[0].pictures);
    }, [idAccomodation]);

    const name = dataCurrentAccomodation[0].host.name.split(' ');
    const rating = dataCurrentAccomodation[0].rating;
    const description  = dataCurrentAccomodation[0].description;
    const equipments = dataCurrentAccomodation[0].equipments;

    return (
        <>
            <Header/>
            <Slider imageSlider={imageSlider}/>
            <main className="accomodation">
                <div className="accomodation_content">
                    <div className="accomodation_content_infos">
                        <h1>{dataCurrentAccomodation[0].title}</h1>
                        <p>{dataCurrentAccomodation[0].location}</p>
                        <div>
                            {dataCurrentAccomodation[0].tags.map((tag, index) => {
                                return (
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="accomodation_content_host">
                        <div>
                            <div className='accomodation_content_host_name'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
                        </div>

                        <div className="accomodation_content_host_stars">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Équipements'} content={equipments}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
