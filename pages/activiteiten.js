import axios from "axios"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ActiviteitenHead from '../components/activiteiten/ActiviteitenHead';
import {getJwt} from '../helpers/login'

const Activiteiten = ({data, jwt}) => (
    <div>
        <ActiviteitenHead />
        <div className="container">
            <Nav jwt={jwt} />
            <div className="content">
                <div className="activiteit-container">
                {data?.map(a => ( 
                    <section key={a.id}>
                        <h1  className="heading-style-1">{a.titel}</h1>
                        <div className="activiteit-grid">
                            {a.locaties.map(l => (  
                            <article key={l.key}>
                                <h2 className="heading-style-2">{l.naam}</h2>
                                <p>{l.km} km</p>
                                <p>{l.adres}</p>
                                <p>{l.website}</p>
                                <p>{l.omschrijving}</p>
                            </article>
                            ))}
                        </div>
                    </section>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
        <style jsx>{`
            .activiteit-container {
                height: 100%;
                padding: 20px;
            }
            .heading-style-1 {
                color: #264F47;
                margin: 20px 0;
            }
            .heading-style-2 {
                margin-bottom: 10px;
                font-size: 1.6rem;
            }
            article {
                margin-bottom: 40px;
                max-width: 500px;
            }
            article p:last-child {
                margin-top: 15px;
            }
            .activiteit-grid {
                display: grid;
                grid-template-columns: auto;
                padding: 10px;
            }

            @media (min-width: 30em) {
                .activiteit-container {
                    padding: 40px;
                }
            }

            @media (min-width: 40em) {
                .activiteit-container {
                    padding: 0 80px;
                }
                section {
                    margin-top: 90px;
                }
            }
            
            @media (min-width: 50em) {
                .activiteit-container {
                    padding: 0 120px;
                }
            }

            @media (min-width: 60em) {
                .activiteit-container {
                    padding: 0 10%;
                }

                .activiteit-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 60px;
                }
            }
        `}</style>
    </div>
)

export async function getServerSideProps(ctx) {
    const res = await axios.get(`https://wdev.be/wdev_anneleen/eindwerk/api/activiteits`)
    const data = res.data['hydra:member'];
    
    const jwt = getJwt(ctx)
    if(typeof jwt === "undefined"){
        return{ props: {data} }
    } else {
        return { props: {data, jwt} };
    }
}

export default Activiteiten