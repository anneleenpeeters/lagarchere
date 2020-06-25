import Nav from '../components/Nav'
import LoginHead from '../components/login/LoginHead';
import LoginForm from '../components/login/LoginForm';

const Login = () => (
    <div>
       <LoginHead />
        <div className="container">
            <Nav/>
            <div className="content">            
                <LoginForm />>  
            </div>
        </div>
    </div>
)

export default Login