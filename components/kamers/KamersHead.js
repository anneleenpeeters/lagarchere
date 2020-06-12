import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import kamerImage from '../images/kamer_mainimg.jpg'

const KamersHead = () => (
    <Head>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <title>La Garchère - Kamers</title>
        <meta name="title" content="La Garchère - Kamers" />
        <meta name="description" content="Ontspan in luxe. Laat jezelf even verwennen in de meest rustgevende en pure natuur van Bourgondië. " />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Garchère - Kamers" />
        <meta property="og:description" content="Ontspan in luxe. Laat jezelf even verwennen in de meest rustgevende en pure natuur van Bourgondië. " />
        <meta property="og:image" content={kamerImage} />
     </Head>
);  

export default KamersHead;