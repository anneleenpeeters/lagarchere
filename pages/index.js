import HomeCom from '../components/index/HomeCom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { parseCookies } from 'nookies'
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
  const cookies = parseCookies(ctx)
  const jwt = cookies.jwtToken;
  if(typeof jwt === "undefined"){
      return{ props: {} }
  } else {
      return { props: {jwt} };
  }
}
