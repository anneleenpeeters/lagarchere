import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer>
        <div className="footer-begin">
            <a className="footer-icon" href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
            <a className="footer-icon" href="#"><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
        <div className="footer-midden">
            <div>
                <h6 className="heading-f">Adres</h6>
                <address>
                    La Garchére<br/>
                    58170 Poil<br/>
                    Frankrijk
                </address>
            </div>
            <div>
                <h6 className="heading-f">Telefoon</h6>
                <a href="tel:00336 86 37 33 65">00336 86 37 33 65</a>
            </div>
            <div>
                <h6 className="heading-f">mail</h6>
                <a href="mailto:erna@lagarchere.be">erna@lagarchere.be</a>
            </div>
        </div>
        <p className="footer-copyright">© 2020 lagarchere.be - All rights reserved</p>
    </footer>

);  

export default Footer;
