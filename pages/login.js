import Layout from "../components/Layout"
import Head from 'next/head'
import logoTitleImage from '../images/logo_title.png'

function Login() {
    return (
        
        <div>
            <Head>
                <title>La Garchere - login</title>
                <link rel="icon" href={logoTitleImage} type="image/icon type"/>
            </Head>
            <Layout>
                <div className="container-login">

                </div>
            </Layout>
        </div>
    )
}
  
  export default Login