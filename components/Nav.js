import Link from 'next/link'
import logoImage from '../images/logo.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
    <nav className="nav stroke">
        <div> 
            <Link href="/"><a className="nav-logo"><img src={logoImage} alt="La Garchère"/></a></Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul className="menu nav-midden">
            <li><Link href="/kamers"><a>Kamers</a></Link></li>
            <li><Link href="/activiteiten"><a>Activiteiten</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/reserveren"><a>Reserveren</a></Link></li>
        </ul>
        <ul className="nav-login menu">
           <li className="login-word"><Link href="/login"><a>Login</a></Link></li>
           <li className="login-icon"><Link href="/login"><a><FontAwesomeIcon icon={faUser} /></a></Link></li>
        </ul>
        
    </nav>

);  

export default Nav;


    // <div className="nav-container">
    //     <div> 
    //         <Link href="/"><a><img src={logoImage} alt="La Garchère"/></a></Link>
    //     </div>
    //     <div className="nav-midden">
    //         <Link href="/kamers"><a>Kamers</a></Link>
    //         <Link href="/activiteiten"><a>Activiteiten</a></Link>
    //         <Link href="/contact"><a>Contact</a></Link>
    //         <Link href="/reserveren"><a>Reserveren</a></Link>
    //     </div>
    //     <div>
    //         <Link href="/login"><a>Login</a></Link>
    //     </div>
        
        
    // </div>