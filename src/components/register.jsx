import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./Auth";
import ProgressBar from '../components/progress'
import { Backdrop } from "@mui/material";

export const Register = (props)=>{
    const {
        handleSubmit,
        handleToggle,
        setErrorMessage,
        setValidMessage,
        setloginSubmit,
        validEmail,
        validPassword,
        localUserDetails,
        clearRegisterSV,
        setClearRegisterSV,
    } = props;
    const context = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisibility,setPasswordVisibility] = useState('password');
    const [companyName, setCompanyName] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const validCompanyName = useRef();
    const userRegistrationDetails = useRef({});
    const email = context.email.trim();
    const password = context.password.trim();

    const handleRegisterSubmit = (e)=>{
        handleSubmit(e);
        const checkcompanyName = companyName.trim();
        const checkConfirmpassword = confirmPassword.trim();
        const companyNameElement = document.querySelector('[name="companyName"]');
        const registerPasswordElement = document.querySelector('[name="passwordR"]');
        const confirmpasswordElement = document.querySelector('[name="confirmpassword"]');

        checkcompanyName === '' ? setErrorMessage(companyNameElement,'Company name cannot be empty') : (validCompanyName.current = true, setValidMessage(companyNameElement));

        (validEmail.current && !context.accountExist.current && validCompanyName.current) && (
            password === '' ? (setErrorMessage(registerPasswordElement,'Password is required')) :
                (validPassword.current &&
                    (checkConfirmpassword === '' ?
                        setErrorMessage(confirmpasswordElement,'Re-enter password') :
                        (
                            password === checkConfirmpassword ?
                                (
                                    setCompanyName(''),
                                    setConfirmPassword(''),
                                    setValidMessage(confirmpasswordElement),
                                    userRegistrationDetails.current = ({
                                        companyName : checkcompanyName,
                                        email : email,
                                        password : password
                                    }),
                                    localUserDetails.push(userRegistrationDetails.current),
                                    localStorage.setItem('userDetails', JSON.stringify(localUserDetails)),
                                    setRegistrationSuccess(true),
                                    props.auth_comp.classList.add('success'),
                                    props.restrictTouch(2500),
                                    setTimeout(() => {
                                        setloginSubmit(true);
                                        setRegistrationSuccess(false);
                                        props.setRegistrationPrompt(true);
                                        setTimeout(() => { props.setRegistrationPrompt(false) }, 2000);
                                    }, 2500),
                                    setTimeout(() => {
                                        document.querySelectorAll('.auth_comp input').forEach(e=>e.value='');
                                        document.querySelectorAll('.valid').forEach((el)=>el.classList.remove('valid'));
                                        validEmail.current = false;
                                        validPassword.current = false;
                                        context.accountExist.current = false;
                                        props.auth_comp.classList.remove('success');
                                    }, 3000)
                                ) : setErrorMessage(confirmpasswordElement,"passwords don't match")
                        )
                    ),
                checkConfirmpassword === '' && setErrorMessage(confirmpasswordElement,'Re-enter password')
                )
        )
    }

    const handlePasswordVisibility = ()=>{
        setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password')
    }

    useEffect(()=>{
        setCompanyName('');
        setConfirmPassword('');
        setClearRegisterSV(false);
    },[clearRegisterSV])

    return <div className="register">
        <form onSubmit={handleRegisterSubmit}>
            <input className="company_name" type='text' name='companyName' placeholder='Company name' onChange={(e)=>{setCompanyName(e.target.value)}}/>
            <div className="error_message"></div>
            <input className="emailR" name='emailR' placeholder='Email' onChange={(e)=>{context.setEmail(e.target.value)}}/>
            <div className="error_message"></div>
            <input className="passwordR" type={passwordVisibility} name='passwordR' placeholder='Password' onChange={(e)=>{context.setPassword(e.target.value)}}/>
            <div className="error_message"></div>
            <input className="password_visibility" type="checkbox" onChange={handlePasswordVisibility} value={passwordVisibility}/>
            <input className="confirm_password" type={passwordVisibility} name='confirmpassword' placeholder='Confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            <div className="error_message"></div>
            <button className='register_button' type='submit'>Register</button>
        </form>
        <button className="toggle_button" data-component='register' onClick={handleToggle}>Already have an account? Login</button>
        {
            <Backdrop open={registrationSuccess} sx={{overflow : 'hidden'}}>
                <ProgressBar color='success'/>
            </Backdrop>
        }
    </div>
}