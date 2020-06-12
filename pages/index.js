import Head from 'next/head'
import homeImage from '../images/home_main.jpg'
import logoTitleImage from '../images/logo_title.png'
import HomeCom from '../components/HomeCom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { parseCookies } from 'nookies'

export default function Home({jwt}) {
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
      <div className="container">
            <Nav jwt={jwt}/>
            <div className="content">
      <HomeCom />
      </div>
            <Footer/>
        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)
  const jwt = cookies.jwtToken;
  if(typeof jwt === "undefined"){
      return{ props: {} }
  } else {
      return { props: {jwt} };
  }
}
