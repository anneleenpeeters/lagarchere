import Link from 'next/link'
import logoImage from '../images/logo.png'
import { useState, useEffect } from 'react'
import {logout} from '../helpers/login'
import { parseCookies } from 'nookies'


function Nav () {
    const [ingelogd, setIngelogd] = useState('');

    useEffect( () => {
        const cookies = parseCookies()
        typeof cookies.jwtToken !== 'undefined' ? setIngelogd(true) : setIngelogd(false)
    })
    
    return(
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
                {ingelogd ? <li><button className="navitem-logout" onClick={logout}>logout</button></li> : <li className="navitem-login"><Link href="/login"><a>Login</a></Link></li> }
            </ul>
        </nav>
    )
 }

export default Nav;
