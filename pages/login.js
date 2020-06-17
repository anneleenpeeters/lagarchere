import {getJwt} from '../helpers/login'
import Nav from '../components/Nav'
import LoginHead from '../components/login/LoginHead';
import LoginForm from '../components/login/LoginForm';


function Login({jwt}) {
    return (
        <div>
           <LoginHead />
            <div className="container">
                <Nav jwt={jwt}/>
                <div className="content">            
                    <LoginForm />>  
                </div>
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
  
export default Login