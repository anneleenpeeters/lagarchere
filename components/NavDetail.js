import Link from 'next/link'
import logoImage from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const NavDetail = () => (
        <div className="container-navdetail">
            <div> 
                <Link href="/"><a className="icon-logo"><img src={logoImage} alt="La Garchère"/></a></Link>
            </div>
            <div>
                <Link href="/kamers"><a className="icon-close"><FontAwesomeIcon icon={faTimes}/></a></Link>
            </div>
        </div>
);  

export default NavDetail;