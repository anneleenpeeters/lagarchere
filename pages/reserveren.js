import axios from 'axios'
import { useState, useEffect } from "react"
import { parseCookies } from 'nookies'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ReserverenHead from '../components/reserveren/ReserverenHead.js';
import ReserverenSeizoen from '../components/reserveren/ReserverenSeizoen.js';
import Link from 'next/link'
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);


function Reserveren({data, jwt}) {
    const cookies = parseCookies;
    const [kamer, setKamer] = useState();
    const [aankomstt, setAankomstt] = useState(null);
    const [vertrekk, setVertrekk] = useState(null);
    const today = moment();
    const [value, setValue] = useState(moment.range(today.clone(), today.clone()))
    const [dateRanges, setDateRanges] = useState([])

    //wanneer er een kamer wordt geselecteerd
    function gewensteKamer(e){
        setDateRanges([])
        setKamer(e.target.value); 

        if(kamer !== undefined){
            document.querySelector('.selecteer-datum').style.display ='inherit';
        }

    }

    useEffect(() => {
        setDateRanges([])
        axios.get(`https://wdev.be/wdev_anneleen/eindwerk/api/reservaties?kamer=${kamer}`)
        .then(response => {
            response.data['hydra:member'].forEach(item => {
                const convertVertrek = moment(item.vertrek).format('YYYY, M, D')
                const convertAankomst =  moment(item.aankomst).format('YYYY, M, D')
                setDateRanges(dateRanges => [...dateRanges, {
                    state: 'unavailable',
                    range: moment.range(new Date(convertAankomst), new Date(convertVertrek))
                    }, 
                ])
            })
            dateRanges.sort((a, b) => moment(a.range.start).isBefore(moment(b.range.start)) ? -1 : 1)
        })
    }, [kamer])



        


    //date range picker
    const stateDefinitions = {
        available: {
        color: 'transparent',
        label: 'Beschikbaar',
        },
        unavailable: {
        selectable: false,
        color: '#595959',
        label: 'Volzet',
        }
    };


 

     //wanneer er een datum wordt geselecteerd
     const onSelect = (value, states) => {
        setValue( value, states );
        setAankomstt(value.start.format('DD-MM-YYYY'))
        setVertrekk(value.end.format('DD-MM-YYYY'))
    };


    //formulier verzenden
    function handleOnSubmit(){
        console.log('submit');
        axios.post(`https://wdev.be/wdev_anneleen/eindwerk/api/reservaties`, {
            "aankomst": aankomstt,
            "vertrek": vertrekk,
            "kamer": kamer,
            "goedgekeurd": false,
            "user": "/wdev_anneleen/eindwerk/api/users/4"
          })
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error);
        });
    }

   

   
    
    return (
        <div>
            <ReserverenHead />
             <div className="container">
            <Nav jwt={jwt}/>
            <div className="content">     
                <div className="container-reserveren">
                    <ReserverenSeizoen />
                    <section className="section-reserveren">
                        <h1 className="heading-style-1">Reserveren</h1>
                        <h2 className="heading-style-2">Selecteer uw gewenste kamer</h2>
                        <div className="grid-kamerkeuze">
                            {data?.map(k => ( 
                                <div key={k.id} className="container-kamerkeuze">
                                    <label htmlFor={k.naam} className="radio-img">
                                        <input type="radio" id={k.naam} name="kamerkeuze" value={k.id} onClick={gewensteKamer} />
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
                                value={value}
                                onSelect={onSelect}
                                singleDateRange={true}
                                numberOfCalendars={2}
                                selectionType='range'
                                minimumDate={new Date()}
                                showLegend={true}
                                stateDefinitions={stateDefinitions}
                                dateStates={dateRanges}
                                defaultState="available"
                                locale={moment().locale('nl')}
                                firstOfWeek={1}
                                />
                                <div className="geselecteerde-datum">
                                <p>Aankomst datum: <span>{aankomstt}</span></p>
                                <p>Vertrek datum: <span>{vertrekk}</span></p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="button-overzicht">
                        <Link href="/bedankt"><a className="button-style-2" onClick={handleOnSubmit}>Reserveer</a></Link>
                    </div>
                    </section>
                    
                </div>
                </div>
            <Footer/>
        </div>            
        <style jsx>{`
            .selecteer-datum {
                display: none;
            }
            .container-reserveren .section-reserveren {
                padding: 40px;
                text-align: center;
            }
            .section-reserveren h1 {
                margin: 40px 0;
            }
            .section-reserveren h2 {
                margin: 20px 0 10px 0;
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
            @media (min-width: 45em) {
                .container-reserveren .section-reserveren {
                    width: auto;
                    text-align: left;
                    padding: 40px;
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
            }

            @media (min-width: 60em) {
                .container-reserveren .section-reserveren {
                    padding: 60px 10%;
                }
            }
            `}</style>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const res = await axios.get(`https://wdev.be/wdev_anneleen/eindwerk/api/kamers`)
    const data = res.data['hydra:member'];
   
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;

    if (typeof jwt === "undefined") {
        ctx.res.statusCode = 302;
        ctx.res.setHeader("Location", "/registratie");
        return{ props: {data} }
    } else {
        return { props: {data, jwt} };
    }
}
  
export default Reserveren


