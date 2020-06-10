import Head from 'next/head'
import homeImage from '../images/home_main.jpg'
import logoTitleImage from '../images/logo_title.png'
import HomeCom from '../components/HomeCom'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
        <title>La Garchère </title>
        <meta name="title" content="La Garchère " />
        <meta name="description" content="Ontdek dit la Garchère. Een gerenoveerde boerderij midden in Bourgondië. Ontspan en geniet. " />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Garchère " />
        <meta property="og:description" content="Ontdek dit la Garchère. Een gerenoveerde boerderij midden in Bourgondië. Ontspan en geniet. " />
        <meta property="og:image" content={homeImage} />
      </Head>
      <HomeCom />
    </div>
  )
}
