import { parseCookies } from 'nookies'
import Nav from '../components/Nav'
import LoginHead from '../components/login/LoginHead';
import LoginForm from '../components/login/LoginForm';

const initialValues = {
    username: '',
    password: ''
  }

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
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    if(typeof jwt === "undefined"){
        return{ props: {} }
    } else {
        return { props: {jwt} };
    }
}
  
export default Login