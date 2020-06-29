import mainImage from '../images/contact_main.jpg'
import Map from "../components/contact/Map"
import ContactHead from '../components/contact/ContactHead'
import SectionText from '../components/contact/SectionText'
import ContactForm from '../components/contact/ContactForm'
import Layout from '../components/Layout'

const Contact = () => (
    <div>
        <ContactHead />
        <Layout>
            <div className="contact-container">
                <div className="container-main">
                    <img className="bg-image" src={mainImage} alt="La Garchère"/>
                    <div className="main-block">
                        <h1 className="heading-style-2">Contacteer ons</h1>
                        <ContactForm />
                    </div>
                </div>
                <SectionText />
                <Map />
            </div>            
        </Layout>
        <style jsx>{`
            .container-main {
                height: 100vh;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                top: -65px;
            }                
            .bg-image {
                height: 103%;
                left: 50%;
                margin-left: -600px;
                position: absolute;
            }
            .main-block {
                padding: 40px;
                position:absolute;
                background-color: white;
                width: 70%;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
                top: 110px;
            }
            .heading-style-2{ margin-top: 20px; }
            @media (min-width: 30em) {        
                .main-block {
                    margin: 10%;
                    width: auto;
                    top: 50px;
                }
            }
            @media (min-width: 40em) {        
                .main-block {
                    margin: 20%;
                    width: auto;
                    top: -30px;
                }
            }
            @media (min-width: 50em) {        
                .main-block {
                    width: 320px;
                    margin-top: 140px;
                }
                .main-block { margin-left: 50%; }
            }
            @media (min-width: 55em){
                .bg-image {
                    min-height: 100%;
                    left: 50%;
                    margin-left: -500px;
                    position: absolute;
                }
            }
            @media (min-width: 60em) {
                .container-main { top: -91px; }
                .bg-image {
                    height: auto;
                    left: 0;
                    margin-left: 0;
                    position: absolute;
                    width: 100%;
                }
                .main-block { margin-top: 180px; }
            }
        `}</style>
    </div>
)

export default Contact       