import Nav from './Nav'
import '../css/main.css'
import '../css/reset.css'

const Layout = (props) => {
    return (
        <div>
            <Nav/>
            {props.children}
        </div>
    )
}

export default Layout;