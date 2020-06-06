import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import Nav from "../components/Nav"
import {Form, Formik, Field, ErrorMessage, formikHelpers} from 'formik'
import {object, string} from 'yup';
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react';


const initialValues = {
    voornaam: '',
    achternaam: '',
    telefoonnr: '',
    email: '',
    password: ''
  }

function Registratie() {
    const [message, setMessage] = useState('');

    return (
        
        <div>
            <Head>
                <title>La Garchere - registratie</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <Nav />
            <div className="container-registratie">
                <section className="section-login">
                <p className="message-login">{message}</p>
                    <h1 className="heading-style-2">Maak een account</h1>
                    <p>Als je graag wilt reserveren, moet je eerst een account aan maken bij la Garchère.</p>
                    <Formik 
                        validationSchema={
                            object({
                            voornaam: string().required(),
                            achternaam: string().required(),
                            telefoonnr: string().required(),
                            email: string().required(),
                            password: string().required().min(8)
                            })
                        }
                        initialValues={initialValues} 
                        onSubmit={(values, formikHelpers)=> {
                            console.log(values)
                                axios.post("https://wdev.be/wdev_anneleen/eindwerk/api/users", values)
                                .then(function (response) {
                                setMessage("Gelukt! Welkom bij la Garchère");
                                window.location = "/"
                                })
                                .catch(function (error) {
                                 setMessage("Oeps! Er liep iets fout!");
                                });
                                
                        }}>
                        {({values, errors, isSubmitting}) => (
                        <Form className="registratie-form"> 
                            <Field name="voornaam" type="text" placeholder="voornaam" className="inputtype-style-2"></Field>
                            <div className="form-error">
                                <ErrorMessage name="voornaam"></ErrorMessage>
                            </div>
                            <Field name="achternaam" type="text" placeholder="achternaam" className="inputtype-style-2"></Field>
                            <div className="form-error"> 
                                <ErrorMessage name="achternaam"></ErrorMessage>
                            </div>
                            <Field name="telefoonnr" type="text" placeholder="telefoonnummer" className="inputtype-style-2"></Field>
                            <div className="form-error">
                                <ErrorMessage name="telefoonnr"></ErrorMessage>
                            </div>
                            <Field name="email" type="email" placeholder="email" className="inputtype-style-2"></Field>
                            <div className="form-error">
                                <ErrorMessage name="email" ></ErrorMessage>
                            </div>
                            <Field name="password" type="password" placeholder="wachtwoord" className="inputtype-style-2"></Field>
                            <div className="form-error">
                                <ErrorMessage name="password"></ErrorMessage>
                            </div>
                             <button type="submit" className="button-style-2" disabled={isSubmitting}>Registreren</button>
                        </Form>
                        )}
                    </Formik>
                    <Link href="/login"><a>Ik heb al een account</a></Link>

                </section>
            </div>
            <style jsx>{`

            .container-registratie {
                background-color: #EAE3D2;
                height: 91vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .container-registratie button {
                text-transform: uppercase;
                font-family: 'Abhaya Libre', serif;
                padding: 10px 40px;
                letter-spacing: 1px;
                margin: 40px 0 20px 0;
            }

            .container-registratie h1 {
                margin: 20px 20px 5px 20px;
                font-size: 3rem;
            }

            .container-registratie p {
                font-size: 0.9rem;
                width: 350px;
                margin: 0 auto 10px auto;
            }

            .container-registratie a {
                font-size: 0.8rem;
                border-bottom: 1px solid #1F1F1F;
            }

            .container-registratie a:hover {
                border-bottom: none;
            }

            @media (min-width: 60em) {
                .container-registratie {
                    margin-top: -110px;
                    height: 100vh;
                }
                .container-registratie h1 {
                    margin-top: 80px;
                }
            }
                
            `}</style>
        </div>
    )
}
  
  export default Registratie