import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import Nav from "../components/Nav"
import homeImage from '../images/home_main.jpg'
import {Form, Formik, Field, ErrorMessage, formikHelpers, setIn} from 'formik'
import {object, string} from 'yup';
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";

const initialValues = {
    username: '',
    password: ''
  }

function Login({jwt}) {
    const [message, setMessage] = useState('');
    const [ingelogd, setIngelogd] = useState(false);

    useEffect(() => {
        if (typeof jwt !== "undefined") {
            setIngelogd(true);
        } else {
            setIngelogd(false);
        }
    }, [])

    function logout()  {
        destroyCookie(null, "jwtToken");
        Router.push("/");
    }
   
    
    return (
        <div>
            <Head>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
                <title>La Garchère - Login</title>
                <meta name="title" content="La Garchère - Login" />
                <meta name="description" content="Welkom terug bij la Garchère. Wil je graag nog eens graag ontspannen in luxe, maar toch dicht bij de natuur staan? Verwen je zelf!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="La Garchère - Login" />
                <meta property="og:description" content="Welkom terug bij la Garchère. Wil je graag nog eens graag ontspannen in luxe, maar toch dicht bij de natuur staan? Verwen je zelf!" />
                <meta property="og:image" content={homeImage} />
            </Head>
            <Nav />
            <div className="container-login">
                <img className="bg-image" src={homeImage} alt="La Garchère kamer"/>
                <div className="container-section">
                    {ingelogd ? (
                        <div className="ingelogd-container">
                            <h1 className="heading-style-2">Welkom, NAAM</h1>
                            <h2 className="heading-style-3">Jouw gegevens</h2>
                            <p>Voornaam</p>
                            <p>Achternaam</p>
                            <p>Email</p>
                            <p>Telefoonnummer</p>
                            <button className="button-style-3" onClick={logout}>logout</button>
                        </div>
                    ) : (
                        <div>
                            <section className="section-login">
                                <p className="message-login">{message}</p>
                                <h1 className="heading-style-2">Welkom!</h1>
                                <Formik 
                                    validationSchema={
                                        object({
                                        username: string().required(),
                                        password: string().required().min(8)
                                        })
                                    }
                                    initialValues={initialValues} 
                                    onSubmit={(values, formikHelpers)=> {
                                        axios.post("https://wdev.be/wdev_anneleen/eindwerk/api/login_check", values)
                                        .then(function (response) {
                                        setMessage("Je bent nu ingelogd");
                                            setCookie(null, "jwtToken", response.data.token, {
                                                maxAge: 60 * 60,
                                                path: "/",
                                            });
                                            window.location = "/"
                                        })
                                        .catch(function (error) {
                                        setMessage("Oeps! Er liep iets fout!");
                                        });
                                    }}>
                                        {({values, errors, isSubmitting}) => (
                                        <Form className="login-form"> 
                                            <Field name="username" type="email" placeholder="email" className="inputtype-style-2"></Field>
                                            <div>
                                            <ErrorMessage name="username"></ErrorMessage>
                                            </div>
                                            <Field name="password" type="password" placeholder="wachtwoord" className="inputtype-style-2"></Field>
                                            <div>
                                            <ErrorMessage name="password"></ErrorMessage>
                                            </div>
                                            <button type="submit" className="button-style-3" disabled={isSubmitting}>Login</button>
                                        </Form>
                                        )}
                                    </Formik>
                                <Link href="/registratie"><a>Ik heb nog geen account</a></Link>
                            </section>
                        </div>
                    )}
                </div>   
            </div>
            <style jsx>{`
                .ingelogd-container {
                    background-color: white;
                }
                .container-login .bg-image {
                    width: 100vw;
                    height: 91vh;
                    object-fit: cover;
                    position: absolute;
                    z-index: -1;
                }

                .container-section {
                    width: 100vw;
                    height: 91vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .section-login {
                    background-color: white;
                    width: 350px;
                    height: 60vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                }

                .container-login button{
                    margin: 40px auto 20px auto;
                    width: 170px;
                }

                .container-login h1{
                    margin-bottom: 20px;
                    font-size: 2.8rem;
                }

                .container-login a {
                    font-size: 0.8rem;
                    border-bottom: 1px solid #1F1F1F;
                    margin-bottom: 50px;
                }
    
                .container-login a:hover {
                    border-bottom: 1px solid transparent;
                }
            
                @media (min-width: 60em) {
                    .container-login .bg-image {
                        margin-top: -110px;
                        height: 100vh;
                    }

                    .container-section {
                        height: 80vh;
                    }
                }

                
            `}</style>
        </div>
    )
}
export const getServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    if(typeof jwt === "undefined"){
        return{ props: {} }
    } else {
        return { props: {jwt} };
    }
}
  
export default Login