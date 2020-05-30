import Link from 'next/link'

const Bedankt = () => (
   <div>
       <div className="container-bedankt">
            <h1 className="heading-style-2">Bedankt voor uw aanvraag bij La Garchère.</h1>
            <p>Zodra u een bevestigingsmail hebt ontvangen kan u verzekerd zijn van u reservatie.</p>
            <Link href="/"><a className="button-style-3">Homepage</a></Link>

       </div>
       
       <style jsx>{`
       .container-bedankt {
            height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            max-width: 550px;
            margin: 0 auto;
        }
        .heading-style-2 {
            text-transform: none;
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .container-bedankt p {
            max-width: 400px;
            margin-bottom: 40px;
        }


      `}</style>
   </div>
   
);  

export default Bedankt;
