import {useRouter} from 'next/router';
import Head from 'next/head'
import logoTitleImage from '../../images/logo_title.png'
import NavDetail from '../../components/NavDetail';
import Link from 'next/link'
import kamerImage from '../../images/kamer_mainimg.jpg'
import mainImage from '../../images/contact_main.jpg'


function Kamer() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>La Garchere - Kamer {router.query.kamer}</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <NavDetail />
            <div className="container-kamerdetail">
                <h1 className="heading-style-1">{router.query.kamer}</h1>
                <div className="masonry">
                    <img src={logoTitleImage} />
                    <img src={kamerImage} />
                    <img src={kamerImage} />
                    <img src={mainImage} />
                    <img src={mainImage} />
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
  
  export default Kamer