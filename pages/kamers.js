import axios from "axios"
import Link from "next/link"
import KamersHead from "../components/kamers/KamersHead"
import Layout from "../components/Layout"

const Kamer = ({data}) => (
    <div>
        <KamersHead />
        <Layout>
            <div className="kamer-container">
                {data.map(k => ( 
                    <section>
                        <div className="kamer-section">
                            <div className="kamer-block-one">
                                <h1 className="heading-style-1">{k.naam}</h1>
                                <p className="ondertitel">{k.personen} personen, {k.oppervlakte}m2</p>
                                <p className="omschrijving">{k.omschrijving}</p>
                                <p>Prijs hoogseizoen: {k.prijshoogseizoen} euro/nacht</p>
                                <p>Prijs laagseizoen: {k.prijslaagseizoen} euro/nacht</p>
                                <h2 className="heading-style-2">Diensten</h2>
                                {k.diensts.map(d => (  
                                    <ul>
                                        <li key={d.id}>{d.omschrijving}</li>
                                    </ul>
                                ))}
                            </div>
                            <div className="kamer-block-two">
                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${k.thumbnail}`} alt={k.naam}/>
                                <Link as={`/kamers/${k.id}`} href="kamers/[id]"><a>Bekijk alle foto's</a></Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
        <style jsx>{`
            p { line-height: 1.5; }
            .kamer-container { margin: 20px; }
            .kamer-section {
                background-color: #1F1F1F;
                color: #fffefa;
            }
            .heading-style-2,
            .heading-style-1 { color: #fffefa; }
            .kamer-block-one { padding: 50px 5% 20px 5%; }
            .ondertitel {
                font-size: 0.8rem;
                margin-bottom: 20px;
            }
            .omschrijving { margin-bottom: 20px; }
            .heading-style-2 { margin-top: 40px; }
            .kamer-block-two img {
                height: 480px;
                width: 80%;
                object-fit: cover;
                margin: 0 auto;
            }
            section { margin-bottom: 80px; }
            li {
                list-style-type: circle;
                margin-left: 40px;
                line-height: 1.8;
            }
            .kamer-block-two {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .kamer-block-two a {
                font-family: 'Abhaya Libre', serif;
                text-transform: uppercase;
                border-bottom: 1px solid #fffefa;
                font-weight: 600;
                letter-spacing: 1px;
                margin-top: 20px;
                color: #fffefa;
                font-size: 1.2rem;
                margin-bottom: 70px;
            }
            @media (min-width: 40em) {
                .kamer-block-one { padding: 70px 10% 20px 10%; }
                .kamer-block-two img {
                    width: 60%;
                    padding: 20px 10% 20px 10%;
                }
            }
            @media (min-width: 45em) {
                .kamer-section {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 20px;
                }
                .kamer-block-one {
                    max-width: 400px;
                    padding-bottom: 80px;
                }
                .kamer-block-two {
                    height: 100%;
                    display: flex;
                    padding-right: 40px;
                }
                .kamer-block-two img {
                    height: 500px;
                    width: 300px;
                    padding: 0;
                    margin-top: 70px;
                }
            }
            @media (min-width: 58em) {
                .kamer-section { margin: 3%; }
                .kamer-block-one { max-width: 400px; }
                .kamer-block-two { max-width: 400px; }
            }
            @media (min-width: 62em) {
                .kamer-section {
                    position: relative;
                    margin-bottom: 180px;
                }
                .kamer-block-one { width: 400px; }
                .kamer-block-two {
                    position: absolute;
                    right: 0;
                    top: 80px;
                }
                .kamer-block-two img {
                    height: 600px;
                    width: 400px;
                    object-fit: cover;
                }
                .kamer-block-two a {
                    color: #1F1F1F;
                    border-bottom 1px solid #1F1F1F;
                }
            }
            @media (min-width: 73em) {
                .kamer-section { margin: 0 10% 180px 10%; }
                .kamer-block-two img {
                    height: 600px;
                    width: 400px;
                    object-fit: cover;
                }
            }
        `}</style>
    </div>
)

export async function getStaticProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}kamers`)
    const data = res.data['hydra:member'];
    return { props: {data} }
}

export default Kamer          