import {useRouter} from 'next/router';
import Head from 'next/head'
import logoTitleImage from '../../images/logo_title.png'
import NavDetail from '../../components/NavDetail';
import Link from 'next/link'
import axios from "axios"


function Kamer({data}) {
    console.log(data);

    return (
        <div>
            <Head>
                <title>La Garchere - Kamer</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Elke kamer heeft zijn eigen thema. Kies een kamer die jou het meeste aanspreekt om de ultieme ervaring te beleven." />
            </Head>
            <NavDetail />
            <div className="container-kamerdetail">
                <h1 className="heading-style-1">test</h1>
                <div className="masonry">
                {data.map(k => ( 
                    <p>{k.naam}</p>
                ))}
                    
                </div>
                <Link href="/reserveren"><a className="button-style-2">Reserveren</a></Link>
            </div>
                
            <style jsx>{`
            .container-kamerdetail {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
            }


            .button-style-2 {
                font-family: 'Abhaya Libre', serif;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1px;
                padding 10px 20px;
                width: 150px;
            }

            .masonry {
                padding: 20px;
                column-count: 1;
            }
            .masonry img{
                margin-bottom: 20px ;
                width: 100%;
            }
            
            @media (min-width: 40rem) {
                .masonry {
                    column-count: 2;
                }
            }
            
            @media (min-width: 60rem) {
                .masonry {
                    column-count: 3;
                    margin: 5%;
                    padding: 0;
                }
            }
        
            `}</style>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const res = await axios.get(`https://wdev.be/wdev_anneleen/eindwerk/api/kamers/${ctx.query.id}`);
    const data = res.data['hydra:member'];
    console.log(data)
    return { props: {data}};
};

  
export default Kamer