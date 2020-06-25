import Nav from '../components/Nav'
import RegistratieHead from '../components/registratie/RegistratieHead'
import RegistratieCom from '../components/registratie/RegistratieCom'

const Registratie = () => (
    <div>
        <RegistratieHead />
        <div className="container">
            <Nav />
            <div className="content">
                <RegistratieCom />
            </div>
        </div>
    </div>
)

export default Registratie