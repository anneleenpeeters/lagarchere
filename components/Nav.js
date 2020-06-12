import Link from 'next/link'
import logoImage from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";


function Nav ({jwt}){
    const [ingelogd, setIngelogd] = useState('');

    useEffect(() => {
        if (typeof jwt !== "undefined") {
            setIngelogd(true);
            console.log('inloggen true')
        } else {
            setIngelogd(false);
            console.log('inloggen false')
        }
    }, [])

    function logout()  {
        destroyCookie(null, "jwtToken");
        Router.push("/login");
    }

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
            {/* {ingelogd ? (
                <li className="login-word"><Link href="/login"><a>Login</a></Link></li>
            ) : (
                <li className="login-word"><button onClick={logout}>Logout</button></li>
            )} */}

            {ingelogd ? <button onClick={logout}>logout</button> : <Link href="/login"><a>Login</a></Link> }
           <li className="login-icon"><Link href="/login"><a><FontAwesomeIcon icon={faUser}/></a></Link></li>
        </ul>
    </nav>)
 }

//  export const getServerSideProps = async (ctx) => {
//     const cookies = parseCookies(ctx)
//     const jwt = cookies.jwtToken;
//     if(typeof jwt === "undefined"){
//         return{ props: {} }
//     } else {
//         return { props: {jwt} };
//     }
// }

export default Nav;
