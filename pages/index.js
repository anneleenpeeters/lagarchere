import Head from 'next/head'
import Layout from '../components/Layout'
import homeImage from '../images/home_main.jpg'
import mainLogoImage from '../images/main_logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Garchere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container-main">
            <img className="bg-image" src={homeImage} alt="La Garchère kamer"/>
            <div className="main-block">
              <img src={mainLogoImage} alt="La Garchère" />
              <p>Suspendisse mattis mollis est, vel finibus ex ultricies elementum. Vivamus quis justo nec erat condimentum fringilla. </p>
              <Link href="/reserveren"><a className="button-style-1">Reserveren</a></Link>
            </div>
        </div>
      </Layout>
      <style jsx>{`
      .container-main {
        height: 100vh;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -65px;
      }
      .bg-image {
        height: 100%;
        left: 50%;
        margin-left: -600px;
        position: absolute;
      }
      .main-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        text-align: center;
        position:absolute;
        top: 20%;
      }

      .main-block img {
        width: 300px;
      }

      .button-style-1 {
        font-family: 'Abhaya Libre', serif;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.8px;
        margin-top: 20px;
      }

      .button-style-1:hover {
        background-color: #1F1F1F;
        color: #faf6f2;
      }

    `}</style>
    </div>
  )
}
