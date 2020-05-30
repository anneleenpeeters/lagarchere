import Layout from "../components/Layout"
import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'

function Reserveren() {
    return (
        
        <div>
            <Head>
                <title>La Garchere - Reservatie</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <Layout>
                <div className="container-reserveren">

                </div>
            </Layout>
        </div>
    )
}
  
  export default Reserveren