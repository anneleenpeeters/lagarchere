import Head from 'next/head'
import logoTitleImage from '../../images/logo_title.png'
import mainLogoImage from '../../images/main_logo.png'

const ReserverenHead = () => (
    <Head>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <title>La Garchère - Reserveren</title>
        <meta name="title" content="La Garchère - Reserveren" /> 
        <meta name="description" content="Bij la Garchère kan je de dagelijkse hectiek even ontsnappen. Wij bieden luxe kamers midden in de pure natuur. Via deze pagina kan je reserveren voor jou verdiende vakantie." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Garchère - Reserveren" />
        <meta property="og:description" content="Bij la Garchère kan je de dagelijkse hectiek even ontsnappen. Wij bieden luxe kamers midden in de pure natuur. Via deze pagina kan je reserveren voor jou verdiende vakantie." />
        <meta property="og:image" content={mainLogoImage} />
    </Head>
);  

export default ReserverenHead;