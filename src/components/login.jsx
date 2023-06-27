import { useContext, useState} from "react";
import { AuthContext } from "../routes/Auth";

export const Login = (props)=>{
    const context = useContext(AuthContext);
    const [passwordVisibility,setPasswordVisibility] = useState('password');

    const handlePasswordVisibility = ()=>{
        setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password')
    }

    return <div className="login">
        <form> 
            <input className="email" type='email' name='email' placeholder='Email' onChange={(e)=>{context.setEmail(e.target.value)}} value={context.email}/>
            <div className="error_message"></div>
            <input className="password" type={passwordVisibility} name='password' placeholder='Password' onChange={(e)=>{context.setPassword(e.target.value)}} value={context.password}/>
            <div className="error_message"></div>
            <input className="password_visibility" type="checkbox" onChange={handlePasswordVisibility}/>
            <button className='login_button' type='submit' onClick={(e)=>{props.handleSubmit(e)}}>{context.loginSuccess ? 'Login successful' : 'Login'}</button>
        </form>
        <button className="toggle_button" data-component='login'>New to our site ? Register</button>
    </div>
}