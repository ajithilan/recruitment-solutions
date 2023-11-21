import { useContext, useState} from "react";
import { AuthContext } from "./Auth";
import ProgressBar from '../components/progress'
import { Backdrop } from "@mui/material";

export const Login = (props)=>{
    const context = useContext(AuthContext);
    const [passwordVisibility,setPasswordVisibility] = useState('password');

    const handlePasswordVisibility = ()=>{
        setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password')
    }
    
    return <div className="login">
        <form onSubmit={props.handleSubmit}> 
            <input className="email" name='email' placeholder='Email' onChange={(e)=>{context.setEmail(e.target.value)}}/>
            <div className="error_message"></div>
            <input className="password" type={passwordVisibility} name='password' placeholder='Password' onChange={(e)=>{context.setPassword(e.target.value)}}/>
            <div className="error_message"></div>
            <input className="password_visibility" type="checkbox" onChange={handlePasswordVisibility}/>
            <button className='login_button' type='submit'>Login</button>
        </form>
        <button className="toggle_button" data-component='login' onClick={props.handleToggle}>New to our site ? Register</button>
        {
            <Backdrop open={context.loginSuccess}>
                <ProgressBar color='primary'/>
            </Backdrop>
        }
    </div>
}