import {Form, Formik, Field, ErrorMessage, formikHelpers} from 'formik'
import {object, string} from 'yup';
import axios from 'axios'
import { useState } from 'react'

const initialValues = {
    voornaam: '',
    achternaam: '',
    email: '',
    bericht: '',
    responded: false
}

const ContactForm = () => {
    const [message, setMessage] = useState('');

    return(
        <div>
            <Formik 
                validationSchema={
                    object({
                        voornaam: string().required().min(2).max(50),
                        achternaam: string().required().min(2).max(50),
                        email: string().required(),
                        bericht: string().required().min(5)
                    })
                }
                initialValues={initialValues} 
                onSubmit={(values, formikHelpers)=> {
                    axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}contacts`, values)
                        .then(function (response) {
                            setMessage("Jouw vraag is verzonden!");
                        })
                        .catch(function (error) {
                            setMessage("Oeps! Er liep iets fout!");
                        });                        
                }}>
                {({values, errors, isSubmitting}) => (
                    <Form className="form-contact">
                        <p>{message}</p>
                        <Field name="voornaam" type="text" placeholder="voornaam" className="inputtype-style-2"></Field>
                        <div><ErrorMessage name="voornaam"></ErrorMessage></div>
                        <Field name="achternaam" type="tex" placeholder="achternaam" className="inputtype-style-2"></Field>
                        <div><ErrorMessage name="achternaam"></ErrorMessage></div>
                        <Field name="email" type="email" placeholder="email" className="inputtype-style-2"></Field>
                        <div><ErrorMessage name="email"></ErrorMessage></div>
                        <Field name="bericht" as="textarea" placeholder="bericht" className="inputtype-style-2 bericht"></Field>
                        <div><ErrorMessage name="beticht"></ErrorMessage></div>  
                        <button type="submit" className="button-style-1" disabled={isSubmitting}>Verzenden</button>
                    </Form>
                )}
            </Formik>             
        </div>
    ) 
};  

export default ContactForm;