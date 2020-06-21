import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {getJwt} from '../helpers/login'
import HomeHead from '../components/index/HomeHead'
import HomeKamer from '../components/index/HomeKamer'
import Subscribe from '../components/index/Subscribe'
import HomeMain from '../components/index/HomeMain'

export default function Home({jwt}) {
  return (
    <div className="container">
      <HomeHead />
      <div className="container">
          <Nav jwt={jwt}/>
          <div className="content">
            <HomeMain />
            <HomeKamer />
            <Subscribe />
          </div>
          <Footer/>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const jwt = getJwt(ctx)
  if(typeof jwt === "undefined"){
      return{ props: {} }
  } else {
      return { props: {jwt} };
  }
}
