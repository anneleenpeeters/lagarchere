import Head from 'next/head'
import logoTitleImage from '../../images/logo_title.png'

const KamerHead = () => (
    <Head>
        <title>La Garchere - Kamer</title>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Elke kamer heeft zijn eigen thema. Kies een kamer die jou het meeste aanspreekt om de ultieme ervaring te beleven." />
    </Head>
);  

export default KamerHead;