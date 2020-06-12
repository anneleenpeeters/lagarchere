import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'
import homeImage from '../images/home_main.jpg'

const LoginHead = () => (
    <Head>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <title>La Garchère - Login</title>
        <meta name="title" content="La Garchère - Login" />
        <meta name="description" content="Welkom terug bij la Garchère. Wil je graag nog eens graag ontspannen in luxe, maar toch dicht bij de natuur staan? Verwen je zelf!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="La Garchère - Login" />
        <meta property="og:description" content="Welkom terug bij la Garchère. Wil je graag nog eens graag ontspannen in luxe, maar toch dicht bij de natuur staan? Verwen je zelf!" />
        <meta property="og:image" content={homeImage} />
    </Head>
);  

export default LoginHead;