import Head from 'next/head'
import logoTitleImage from '../../images/logo_title.png'
import mainImage from '../../images/contact_main.jpg'

const ContactHead = () => (
    <Head>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <title>La Garchère - Contact</title>
        <meta name="title" content="La Garchère - Contact" />
        <meta name="description" content="Vragen over reserveringen, omgeving, bereikbaarheid, ... wij helpen je graag verder. " />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Garchère - Contact" />
        <meta property="og:description" content="Vragen over reserveringen, omgeving, bereikbaarheid, ... wij helpen je graag verder. " />
        <meta property="og:image" content={mainImage} />
    </Head>
);  

export default ContactHead;