import mainLogoImage from '../../images/main_logo.png'
import Link from 'next/link'
import homeImage from '../../images/home_main.jpg'

const HomeMain = () => (
    <div>
        <div className="container-main">
            <img className="bg-image" src={homeImage} alt="La Garchère kamer"/>
            <div className="main-block">
                <img src={mainLogoImage} alt="La Garchère" />
                <p>Suspendisse mattis mollis est, vel finibus ex ultricies elementum. Vivamus quis justo nec erat condimentum fringilla. </p>
                <Link href="/reserveren"><a className="button-style-1">Reserveren</a></Link>
            </div>
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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                position:absolute;
                top: 25%;
                max-width: 400px;
            }
            .main-block img { width: 300px; }
            .button-style-1 {
                font-family: 'Abhaya Libre', serif;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 0.8px;
                margin-top: 20px;
            }
            .button-style-1:hover {
                background-color: #1F1F1F;
                color: #faf6f2;
            }
            @media (min-width: 50em) {        
                .bg-image {
                    margin-left: 0;
                    left: 0;
                }
            }
            @media (min-width: 60em) {
                .main-block { margin-left: 10%; }
                .container-main { top: -95px; }
                .bg-image {
                    width: 100%;
                    height: auto;
                }
                .main-block img { width: 400px; }
            }
        `}</style>
    </div>
)

export default HomeMain;