import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../routes/Auth";

export const Register = (props)=>{
    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountRegistered, setAccountRegistered] = useState(false);
    const [passwordVisibility,setPasswordVisibility] = useState('password');
    const auth_switch = document.querySelector('.auth_comp');
    const userRegistrationDetails = useRef({})

    const handleRegisterSubmit = (e)=>{
        props.handleSubmit(e);
        const checkUsername = username.trim();
        const checkConfirmpassword = confirmPassword.trim();
        const usernameElement = document.querySelector('[name="username"]');
        const registerPasswordElement = document.querySelector('[name="passwordR"]');
        const confirmpasswordElement = document.querySelector('[name="confirmpassword"]');

        (props.validEmail.current && !context.accountExist.current) && (
            checkUsername === '' ? props.setErrorMessage(usernameElement,'Enter username') :
                (checkUsername.length > 7 ?
                    props.setValidMessage(usernameElement):
                    props.setErrorMessage(usernameElement, 'Username must be atleast 8 characters')
                ),
            context.password === '' ? (props.setErrorMessage(registerPasswordElement,'Password is required')) :
                (props.validPassword.current &&
                    console.log('entered'),
                    (checkConfirmpassword === '' ?
                        props.setErrorMessage(confirmpasswordElement,'Re-enter password') :
                        (
                            context.password === confirmPassword ?
                                (
                                    props.setValidMessage(confirmpasswordElement),
                                    setAccountRegistered(true),
                                    userRegistrationDetails.current = ({
                                        username : checkUsername,
                                        email : context.email.trim(),
                                        password : context.password.trim()
                                    }),
                                    context.Userlogindetails.current.push(userRegistrationDetails.current),
                                    setUsername(''),
                                    context.setEmail(''),
                                    context.setPassword(''),
                                    setConfirmPassword(''),
                                    document.querySelectorAll('.valid').forEach((el)=>el.classList.remove('valid')),
                                    setTimeout(() => {
                                        auth_switch.classList.remove('switch');
                                    }, 1000),
                                    setTimeout(() => {
                                        (props.setRegisterSubmit(false));
                                        setAccountRegistered(false);
                                        props.validEmail.current = false;
                                        props.validPassword.current = false;
                                    }, 2000)
                                ) : props.setErrorMessage(confirmpasswordElement,"passwords don't match")
                        )
                    ),
            checkConfirmpassword === '' && props.setErrorMessage(confirmpasswordElement,'Re-enter password'))
        )
        context.accountExist.current = false;
    }

    const handlePasswordVisibility = ()=>{
        setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password')
    }

    return <div className="register">
        <form>
            <input className="username" type='text' name='username' placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} value={username} title="Username must be atleast 8 characters"/>
            <div className="error_message"></div>
            <input className="emailR" type='email' name='emailR' placeholder='Email' onChange={(e)=>{context.setEmail(e.target.value)}} value={context.email}/>
            <div className="error_message"></div>
            <input className="passwordR" type={passwordVisibility} name='passwordR' placeholder='Password' onChange={(e)=>{context.setPassword(e.target.value)}} value={context.password} title="Must contain atleast one number, one uppercase and one lowercase letter, one special character and minimum 8 characters"/>
            <div className="error_message"></div>
            <input className="password_visibility" type="checkbox" onChange={handlePasswordVisibility} value={passwordVisibility}/>
            <input className="confirm_password" type={passwordVisibility} name='confirmpassword' placeholder='Confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}/>
            <div className="error_message"></div>
            <button className='register_button' type='submit' onClick={handleRegisterSubmit}>{accountRegistered ? 'Account registered' : 'Register'}</button>
        </form>
        <button className="toggle_button" data-component='register'>Already have an account? Login</button>
    </div>
}