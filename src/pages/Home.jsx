import '../css/home.css'
import '../css/main.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    )
}
