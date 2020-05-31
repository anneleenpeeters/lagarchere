import Layout from "../components/Layout"
import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import Link from 'next/link'


function Reserveren() {
    return (
        
        <div>
            <Head>
                <title>La Garchere - Reservatie</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <Layout>
                <div className="container-reserveren">
                    <section className="section-seizoen">
                        <h1 className="heading-style-1">Seizoenen en prijzen</h1>
                        <div className="seizoen-grid">
                            <div> 
                                <h2 className="heading-style-2">Laagseizoen</h2>
                                <p>januari, februari, maart, april, mei, oktober, november</p>
                                <p>In het laag seizoen kan u de genieten van de kamer, met minimaal verhuur van twee nachten. De kamer is inclusief ontbijt, zwembad en jacuzzi. </p>
                            </div>
                            <div>
                                <h2 className="heading-style-2">Hoogseizoen</h2>
                                <p>juni, juli, augustus, september, december</p>
                                <p>In het hoog seizoen kan u de genieten van de kamer, met minimaal verhuur van vier nachten. De kamer is inclusief ontbijt, zwembad en jacuzzi. </p>
                            </div>
                        </div>
                    </section>
                    <section className="section-reserveren">
                        <h1 className="heading-style-1">Reserveren</h1>
                        <h2 className="heading-style-2">Selecteer uw gewenste kamer</h2>
                        <h2 className="heading-style-2">Selecteer uw datum</h2>
                    </section>
                    <div className="button-overzicht">
                        <Link href="/"><a className="button-style-2">Ga naar overzicht</a></Link>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
            .container-reserveren .section-seizoen,
            .container-reserveren .section-reserveren {
                padding: 40px;
                text-align: center;
            }

            .section-seizoen h1,
            .section-reserveren h1 {
                margin: 40px 0;
            }

            .section-seizoen h2,
            .section-reserveren h2 {
                margin: 20px 0 10px 0;
            }

            .section-seizoen p {
                margin: 10px 0;
            }

            .section-reserveren {
                background-color: #EAE3D2;
            }

            .button-overzicht {
                width: 100%;
                display: flex;
                justify-content: center;
                margin: 50px 0;
            }

            .container-reserveren .button-style-2 {
                font-family: 'Abhaya Libre', serif;
                text-transform: uppercase;
                padding: 10px 25px;

            }

            @media (min-width: 35em) {
                .container-reserveren .section-seizoen{
                    width: 500px;
                    margin: 0 auto;
                }
            }

            @media (min-width: 45em) {
                .container-reserveren .section-seizoen,
                .container-reserveren .section-reserveren {
                    width: auto;
                    text-align: left;
                    padding: 40px;
                }

                .section-seizoen .seizoen-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 60px;
                }
            }

            @media (min-width: 60em) {
                .container-reserveren .section-seizoen,
                .container-reserveren .section-reserveren {
                    padding: 60px 10%;
                }

                .section-seizoen .seizoen-grid {
                    grid-column-gap: 15%;
                }
            }
            `}</style>
        </div>
    )
}
  
  export default Reserveren