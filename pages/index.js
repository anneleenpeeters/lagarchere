import HomeHead from '../components/index/HomeHead'
import HomeKamer from '../components/index/HomeKamer'
import Subscribe from '../components/index/Subscribe'
import HomeMain from '../components/index/HomeMain'
import Layout from '../components/Layout'

const Home = () => (
    <div className="container">
        <HomeHead />
        <Layout >
            <HomeMain />
            <HomeKamer />
            <Subscribe />
        </Layout>
    </div>
)

export default Home;

