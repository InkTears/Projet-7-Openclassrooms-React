import '../css/header.css'
import Logo from '../assets/logo.png'
import Navbar from './Navbar'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
	)
}
