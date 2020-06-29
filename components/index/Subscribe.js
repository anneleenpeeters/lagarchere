import {Form, Formik, Field, ErrorMessage, formikHelpers} from 'formik'
import {object, string} from 'yup';
import axios from 'axios'
import { useState } from 'react'

const initialValues = {
    email: ''
  }

const Subscribe = () => {
    const [message, setMessage] = useState('');

    return(
        <div>
            <div className="container-subscribe">
                <h2 className="heading-style-1">Schrijf je in voor onze nieuwsbrief</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <Formik 
                    validationSchema={
                        object({
                            email: string().required()
                        })
                    }
                    initialValues={initialValues} 
                    onSubmit={(values, formikHelpers)=> {
                        axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}subscribes`, values)
                            .then(function (response) {
                                setMessage("Joepie! Je ontvangt nu onze nieuwsbrieven!");
                            })
                            .catch(function (error) {
                                setMessage("Oeps! Er liep iets fout!");
                            });                        
                    }}>
                    {({values, errors, isSubmitting}) => (
                        <Form>
                            <Field name="email" type="email" placeholder="email" className="inputtype-style-one"></Field>
                            <div><ErrorMessage name="email"></ErrorMessage></div>
                            <button type="submit" className="button-style-1" disabled={isSubmitting}>Inschrijven</button>
                            <p className="message-subscribe">{message}</p>
                        </Form>
                    )}
                </Formik>
            </div>

            <style jsx>{`
                .button-style-1 {
                    font-family: 'Abhaya Libre', serif;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                    margin-top: 20px;
                }
                .button-style-1:hover {
                    background-color: #1F1F1F;
                    color: #faf6f2;
                }

                .container-subscribe {
                    padding: 60px 20px;
                    text-align: center;
                }
                .container-subscribe p { margin: 20px 0 40px 0; }
                form {
                    display: flex;
                    flex-direction: column;
                }
                .message-subscribe { font-weight: 600; }
                @media (min-width: 30em) {
                    .container-subscribe { padding: 100px 60px; }
                    input { width: 70%; }
                }
                @media (min-width: 40em) {
                    .container-subscribe {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </div>
    )
}

export default Subscribe;