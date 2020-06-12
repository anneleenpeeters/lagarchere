import Nav from '../components/Nav'
import { parseCookies } from 'nookies'
import RegistratieHead from '../components/registratie/RegistratieHead'
import RegistratieCom from '../components/registratie/RegistratieCom'

function Registratie({jwt}) {
    return (
        <div>
            <RegistratieHead />
            <div className="container">
                <Nav jwt={jwt} />
                <div className="content">
                    <RegistratieCom />
                </div>
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
  
export default Registratie