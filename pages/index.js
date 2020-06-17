import HomeCom from '../components/index/HomeCom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {getJwt} from '../helpers/login'
import HomeHead from '../components/index/HomeHead'

export default function Home({jwt}) {
  return (
    <div className="container">
      <HomeHead />
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
  
  const jwt = getJwt(ctx)
  if(typeof jwt === "undefined"){
      return{ props: {} }
  } else {
      return { props: {jwt} };
  }
}
