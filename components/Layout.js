import Nav from "./Nav";
import Footer from "./Footer";


const Layout = (props) => (
    <div>
        <div className="container">
            <Nav/>
                <div className="content">
                    {props.children}  
                </div>
            <Footer/>
        </div>  

    </div>
);  

export default Layout;
