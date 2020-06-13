import mainImage from '../images/contact_main.jpg'
import Map from "../components/contact/Map"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { parseCookies } from 'nookies'
import ContactHead from '../components/contact/ContactHead'


const Contact = (jwt) => {
    return (
        <div>
            <ContactHead />
            <div className="container">
                <Nav jwt={jwt}/>
                <div className="content">                
                    <div className="contact-container">
                        <div className="container-main">
                            <img className="bg-image" src={mainImage} alt="La Garchère"/>
                            <div className="main-block">
                                <h1 className="heading-style-2">Contacteer ons</h1>
                                <form> 
                                    <input type="text" placeholder="Voornaam"/>
                                    <input type="text" placeholder="Achternaam"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea placeholder="Bericht"></textarea>
                                    <button className="button-style-3">Verzenden</button>
                                </form>
                            </div>
                        </div>
                        <section>
                            <p className="p-chic">Vestibulum eget velit aliquam velit venenatis ornare. Nullam dapibus tellus eu orci volutpat varius sed efficitur massa. Curabitur maximus erat nec nisi varius blandit. Duis eleifend leo felis, nec elementum purus dignissim at. Mauris mauris leo, molestie vitae sem quis, sodales semper nibh. Fusce ut nibh ac ante hendrerit lobortis in sed nibh. Aliquam vestibulum vitae arcu sed mollis. Mauris posuere ante ante.</p>
                        </section>
                        <Map />
                    </div>
                </div>
            <Footer/>
        </div>           
        <style jsx>{`
            .container-main {
                height: 100vh;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                top: -65px;
            }
            .bg-image {
                height: 100%;
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
            form {
                display: flex;
                flex-direction: column;
                margin-top: 40px;
            }
            input, textarea {
                background-color: transparent;
                padding: 10px 20px;
                margin: 10px 0;
                border: none;
                border-bottom: 1px solid #1F1F1F;
                font-family: 'Hind', sans-serif;
            }
            textarea {
                min-height: 80px;
            }
            button {
                width: 60%;
                margin: 20px auto 0 auto;
            }
            section {
                padding: 50px 70px 100px 70px;
                text-align: center;
            }

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
                .main-block {
                    margin-left: 50%;
                }
                section {
                    padding: 5% 20% 10% 20%;
                }
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
                .container-main {
                    top: -88px;
                }
                .bg-image {
                    height: auto;
                    left: 0;
                    margin-left: 0;
                    position: absolute;
                    width: 100%;
                }
                .main-block {
                    margin-top: 180px;
                }
                section {
                    padding: 5% 25% 10% ;
                }
            }
        `}</style>
    </div>
    )
  }
export const getServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    if(typeof jwt === "undefined"){
        return{ props: {} }
    } else {
        return { props: {jwt} };
    }
}
export default Contact          