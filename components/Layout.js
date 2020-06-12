import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div className="container">
            <Nav />
            <div className="content">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;