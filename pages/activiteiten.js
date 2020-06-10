import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import mainLogoImage from '../images/main_logo.png'
import ActiviteitCom from '../components/ActiviteitCom'



const Activiteiten = () => {

    return (
        <div>
            <Head>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
                <title>La Garchère - Activiteiten</title>
                <meta name="title" content="La Garchère - Activiteiten" />
                <meta name="description" content="Rondom het hotel la Garchère zijn er veel activiteiten te beleven. In deze steek zijn er diverse wijnroutes, kastelen en golfbanen. Op onze website vind u allerlei informatie hierover." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="La Garchère - Activiteiten" />
                <meta property="og:description" content="Rondom het hotel la Garchère zijn er veel activiteiten te beleven. In deze steek zijn er diverse wijnroutes, kastelen en golfbanen. Op onze website vind u allerlei informatie hierover." />
                <meta property="og:image" content={mainLogoImage} />
            </Head>
            <ActiviteitCom />
        </div>
    )
  }
  
  export default Activiteiten          