import {Form, Formik, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup';
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react'
import { setCookie } from 'nookies'
import homeImage from '../../images/home_main.jpg'


const initialValues = {
    username: '',
    password: ''
  }

function LoginForm () {
    const [message, setMessage] = useState('');

    return (
        <div className="container-login">
            <img className="bg-image" src={homeImage} alt="La Garchère kamer"/>
            <div className="container-section">
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
                                <div><ErrorMessage name="username"></ErrorMessage></div>
                                <Field name="password" type="password" placeholder="wachtwoord" className="inputtype-style-2"></Field>
                                <div><ErrorMessage name="password"></ErrorMessage></div>
                                <button type="submit" className="button-style-3" disabled={isSubmitting}>Login</button>
                            </Form>
                        )}
                    </Formik>
                    <Link href="/registratie"><a>Ik heb nog geen account</a></Link>
                </section>
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

export default LoginForm