import '../css/notFound.css'
import '../css/main.css'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='notFound'>
            <Header />
            <div className="notFound_infos">
                <h1 className='notFound_infos_title'>404</h1>
                <p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
            </div>
            <Link className='notFound_infos_return' to='/Kasa'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
