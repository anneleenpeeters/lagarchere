import Head from 'next/head'
import Layout from '../components/Layout'
import homeImage from '../images/home_main.jpg'
import mainLogoImage from '../images/main_logo.png'
import kamerImage from '../images/kamer_mainimg.jpg'
import logoTitleImage from '../images/logo_title.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Garchere</title>
        <link rel="icon" href={logoTitleImage} type="image/icon type"/>
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
        <section>
          <img className="kamer-image" src={kamerImage} alt="Kamer luxe"/>
          <div>
            <h2 className="heading-style-2">Kamer</h2>
            <p className="p-chic">Vestibulum eget velit aliquam velit venenatis ornare. Nullam dapibus tellus eu orci volutpat varius sed efficitur massa. Curabitur maximus erat nec nisi varius blandit. Duis eleifend leo felis, nec elementum purus dignissim at. Mauris mauris leo, molestie vitae sem quis, sodales semper nibh. Fusce ut nibh ac ante hendrerit lobortis in sed nibh. Aliquam vestibulum vitae arcu sed mollis. Mauris posuere ante ante.</p>
          </div>
        </section>
        <div className="container-subscribe">
          <h2 className="heading-style-1">Schrijf je in voor onze nieuwsbrief</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          <form>
            <input className="inputtype-style-one" type="text" placeholder="email" />
            <button type="submit" className="button-style-1">Inschrijven</button>
          </form>
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
        top: 25%;
        max-width: 400px;
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

      section {
        height: 100vh;
        background-color: #EAE3D2;
        margin-top: -65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 20px;
        text-align: center;
      }

      .kamer-image {
        width: 80vw;
        height: 400px;
        object-fit: cover;
      }

      .heading-style-2 {
        margin: 30px 0 10px 0;
      }

      .container-subscribe {
        padding: 60px 20px;
        text-align: center;
      }

      .container-subscribe p {
        margin-top: 20px;
      }

      form {
        margin-top: 40px;
      }

      @media (min-width: 30em) {
        section {
          padding: 100px 60px;
        }

        .kamer-image {
          width: 80vw;
          height: 500px;
        }

        .container-subscribe {
          padding: 100px 60px;
        }

        input {
          width: 70%;
        }
      }

      @media (min-width: 40em) {
        section {
          padding: 100px 100px;
        }

        .kamer-image {
          width: 60vw;
          height: 500px;
        }

        .container-subscribe {
          max-width: 500px;
          margin: 0 auto;
        }
      }

      @media (min-width: 50em) {        
        .bg-image {
          margin-left: 0;
          left: 0;
        }

        section {
          padding: 0 40px;
          display: grid;
          grid-template-columns: auto auto;
        }

        .kamer-image {
          width: auto;
          height: 550px;
          margin: 0 auto;
        }

        section div {
          width: 300px;
          margin: 0 auto;
        }
      }

      @media (min-width: 60em) {
        .main-block { 
          margin-left: 10%;
        }

        .container-main {
          top: -110px;
        }

        .bg-image {
          width: 100%;
          height: auto;
        }

        .main-block img {
          width: 400px;
        }

        section {
          margin-top: -170px;
          padding: 5% 0;
        }
      }

    `}</style>
    </div>
  )
}
