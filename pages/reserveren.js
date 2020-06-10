import Layout from "../components/Layout"
import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import Link from 'next/link'
import mainLogoImage from '../images/main_logo.png'
import useSWR from 'swr'
import axios from 'axios'
import { useState, useEffect } from "react"

import { DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {convertDate} from '../helpers.js'
import { parseCookies } from 'nookies'


function Reserveren() {
    const cookies = parseCookies;
    const {data} = useSWR("https://wdev.be/wdev_anneleen/eindwerk/api/kamers", (url) => axios(url).then(response => response.data['hydra:member']));
    const [kamer, setKamer] = useState('');
    const [focus, setFocus] = useState(null);
    const [dateRange, setdateRange] = useState({
        startDate: null,
        endDate: null
    });

    const [aankomst, setAankomst] = useState(null);
    const [vertrek, setVertrek] = useState(null);

    const { startDate, endDate } = dateRange;
    const handleOnDateChange = (startDate, endDate) => setdateRange(startDate, endDate);

    useEffect(() => {
        setAankomst(convertDate(dateRange.startDate));
        setVertrek(convertDate(dateRange.endDate));
    })
    

    function gewensteKamer(e){
        setKamer('/wdev_anneleen/eindwerk/api/kamers/' + e.target.value);

        if(kamer === ''){
            document.querySelector('.selecteer-datum').style.display ='inherit';
        }
    }

    function handleOnSubmit(){
        console.log('submit');
        axios.post("https://wdev.be/wdev_anneleen/eindwerk/api/reservaties", {
            "aankomst": aankomst,
            "vertrek": vertrek,
            "kamer": kamer,
            "goedgekeurd": false,
            "user": "/wdev_anneleen/eindwerk/api/users/4"
          })
          .then(function (response) {
            console.log('test');
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Head>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
                <title>La Garchère - Reserveren</title>
                <meta name="title" content="La Garchère - Reserveren" /> 
                <meta name="description" content="Bij la Garchère kan je de dagelijkse hectiek even ontsnappen. Wij bieden luxe kamers midden in de pure natuur. Via deze pagina kan je reserveren voor jou verdiende vakantie." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="La Garchère - Reserveren" />
                <meta property="og:description" content="Bij la Garchère kan je de dagelijkse hectiek even ontsnappen. Wij bieden luxe kamers midden in de pure natuur. Via deze pagina kan je reserveren voor jou verdiende vakantie." />
                <meta property="og:image" content={mainLogoImage} />
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
                        <div className="grid-kamerkeuze">
                            {data?.map(k => ( 
                                <div key={k.id} className="container-kamerkeuze">
                                    <label htmlFor={k.naam} className="radio-img">
                                        <input type="radio" id={k.naam} name="kamerkeuze" value={k.id} onChange={gewensteKamer} />
                                        <img src={`https://wdev.be/wdev_anneleen/eindwerk/images/kamer/${k.thumbnail}`} alt={k.naam} />
                                        <p>Kamer {k.naam}</p>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="selecteer-datum">
                            <h2 className="heading-style-2">Selecteer uw datum</h2>
                            <div className="data-wrapper">
                            <DateRangePicker
                                startDatePlaceholderText="Aankomst"
                                startDate={startDate}
                                onDatesChange={handleOnDateChange}
                                endDatePlaceholderText="Vertrek"
                                endDate={endDate}
                                numberOfMonths={2}
                                displayFormat="D MMM YYYY"
                                showClearDates={true}
                                focusedInput={focus}
                                onFocusChange={focus => setFocus(focus)}
                                startDateId="startDateMookh"
                                endDateId="endDateMookh"
                                minimumNights={0}
                                firstDayOfWeek={1}
                            />
                            </div>
                        </div>
                        <div className="button-overzicht">
                        <button className="button-style-2" onClick={handleOnSubmit}>Ga naar overzicht</button>
                    </div>
                    </section>
                    
                </div>
            </Layout>
            <style jsx>{`

            .selecteer-datum {
                display: none;
            }
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

            .section-reserveren img {
                height: 380px;
                width: 80%;
                object-fit: cover;
            }

            .container-kamerkeuze {
                margin: 30px 0;
            }

            .container-kamerkeuze p {
                text-align: center;
                font-size: 1.2rem;
                font-weight: 300;
                transition: all 500ms;
            }

            .radio-img  > input { 
                display: none;
              }
              
            .radio-img  > img{
                cursor: pointer;
                opacity: 0.7;
                transition: all 500ms;
            }
              
            .radio-img  > input:checked + img { 
                opacity: 1;
            }

            .radio-img  > input:checked ~ p {
                font-weight: 600;
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

                .grid-kamerkeuze {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 50px;
                }

                .section-reserveren img {
                    height: 490px;
                    justify-content: center;
                    width: 100%;
                }

                .section-reserveren label {
                   
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

export const getServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    if (typeof jwt === "undefined") {
        ctx.res.statusCode = 302;
        ctx.res.setHeader("Location", "/registratie");
    }
    return {props: {}};
}
  
export default Reserveren