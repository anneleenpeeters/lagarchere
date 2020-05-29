import Layout from "../components/Layout"
import Head from 'next/head'
import axios from "axios"
import logoTitleImage from '../images/logo_title.png'
import {useState, useEffect, useSWR} from "react"

const Activiteiten = () => {
    // const {data} = useSWR('https://wdev.be/wdev_anneleen/eindwerk/api/activiteits', (url) => axios(url).then(r => r.data));

    const [data, setData] = useState([]);
    useEffect(() => {
        async function loadData(){
            const response = await axios("https://wdev.be/wdev_anneleen/eindwerk/api/activiteits");
            setData(response.data['hydra:member']);
            console.log(response.data['hydra:member']);
        }
        loadData();
    },[]);

    //console.log(data.map(a => <p>{a.titel}</p>))
    return (
        <div>
            <Head>
                <title>La Garchere - Activiteiten</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
        <Layout>
        
            <div className="activiteit-container">
            {data.map(a => ( 
                <section key={a.id}>
                    <h1  className="heading-style-1">{a.titel}</h1>
                    <div className="activiteit-grid">
                        {a.locaties.map(l => (  
                        <article>
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

        </Layout>
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
  }
  
  export default Activiteiten



  


    // const [error, setError] = useState(false);
    
        // axios
        //   .get("https://wdev.be/wdev_anneleen/eindwerk/api/activiteits")
        //   .then(response => {
        //     //setData(response.data['hydra:member']);
        //     console.log(response.data['hydra:member'][0].titel);
        //   })
        //   .catch(error => console.log(error));




     
          