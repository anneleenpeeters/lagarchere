import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import Nav from "../components/Nav"
import homeImage from '../images/home_main.jpg'
import {Form, Formik, Field, ErrorMessage, formikHelpers} from 'formik'
import {object, string} from 'yup';
import Link from 'next/link'
import axios from 'axios';


const initialValues = {
    username: '',
    password: ''
  }

function Login() {
    return (
        
        <div>
            <Head>
                <title>La Garchere - login</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <Nav />
            <div className="container-login">
                <img className="bg-image" src={homeImage} alt="La Garchère kamer"/>
                <div className="container-section">
                    <section className="section-login">
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
                                console.log(values)
                                axios.post("https://wdev.be/wdev_anneleen/eindwerk/api/", values)
                                .then(function (response) {
                                console.log(response);
                                })
                                .catch(function (error) {
                                console.log(error);
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
                                    <button type="submit" className="button-style-3" disabled={isSubmitting}>Inschrijven</button>
                                </Form>
                                )}
                            </Formik>
                            <Link href="/registratie"><a>Ik heb nog geen account</a></Link>

                    </section>
                </div>   
            </div>
            <style jsx>{`
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
  
  export default Login