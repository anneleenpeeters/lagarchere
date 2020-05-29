import Link from 'next/link'
import logoImage from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
    <nav className="nav stroke">
        <div> 
            <Link href="/"><a className="nav-logo"><img src={logoImage} alt="La Garchère"/></a></Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu nav-midden">
            <li><Link href="/kamers"><a>Kamers</a></Link></li>
            <li><Link href="/activiteiten"><a>Activiteiten</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/reserveren"><a>Reserveren</a></Link></li>
        </ul>
        <ul className="nav-login menu">
           <li className="login-word"><Link href="/login"><a>Login</a></Link></li>
           <li className="login-icon"><Link href="/login"><a><FontAwesomeIcon icon={faUser}/></a></Link></li>
        </ul>
        
    </nav>

);  

export default Nav;
