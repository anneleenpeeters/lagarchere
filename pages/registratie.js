import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import mainLogoImage from '../images/main_logo.png'
import RegistratieCom from '../components/RegistratieCom'

function Registratie() {
    return (
        <div>
            <Head>
$               <link rel="icon" href={logoTitleImage} type="image/icon type"/>
                <title>La Garchère - Registratie</title>
                <meta name="title" content="La Garchère - Registratie" />
                <meta name="description" content="Maak een account aan bij la Garchère en reserveer jou gewenste kamer. Kom tot rust en geniet van de rust." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="La Garchère - Registratie" />
                <meta property="og:description" content="Maak een account aan bij la Garchère en reserveer jou gewenste kamer. Kom tot rust en geniet van de rust." />
                <meta property="og:image" content={mainLogoImage} />
            </Head>
            <RegistratieCom />
        </div>
    )
}
  
export default Registratie