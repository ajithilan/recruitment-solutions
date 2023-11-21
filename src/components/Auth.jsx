import { createContext, useEffect, useRef, useState } from 'react'
import { Login } from './login'
import { Register } from './register'
import { Rules } from './rules'
import { Backdrop } from '@mui/material';

export const AuthContext = createContext();

export const Auth = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSubmit, setloginSubmit] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [clearRegisterSV, setClearRegisterSV] = useState(false);
    const validEmail = useRef(false);
    const validPassword = useRef(false);
    const accountExist = useRef(false);
    const fetchedUserDetails = useRef({
        storedUserPassword : '',
        storedCompanyName : ''
    });
    const objectFromDB = useRef();
    const auth_comp = document.querySelector('.auth_comp');
    const auth_styles = {
        zIndex: 24,
        backgroundColor:  'rgba(0,0,0,.9)',
        boxShadow: '0px 0px 100px 10px black',
    }
    const admin = {
        companyName: 'admin',
        email: 'admin123@gmail.com',
        password: 'Admin@123'
    }
    localStorage.setItem('userDetails', JSON.stringify([admin]));
    let localUserDetails;
    localStorage.getItem('userDetails') ? (
        localUserDetails = JSON.parse(localStorage.getItem('userDetails'))
    ) : (
        localUserDetails=[]
    )

    const setValidMessage = (element)=>{
        element.classList.remove('error');
        element.classList.add('valid');
        const removeError = element.nextElementSibling;
        removeError.innerText = '';
    }

    const setErrorMessage = (element, message)=>{
        element.classList.remove('valid');
        element.classList.add('error');
        element.style.animation = 'errorAnim .5s ease-in-out'
        setTimeout(() => { element.style.animation = '' }, 600);
        const errorElement = element.nextElementSibling;
        errorElement.innerText = message;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const checkEmail = email.trim();
        const checkPassword = password.trim();
        const emailElement = document.querySelector('[name="email"]');
        const passwordElement = document.querySelector('[name="password"]');
        const registerEmailElement = document.querySelector('[name="emailR"]');
        const registerPasswordElement = document.querySelector('[name="passwordR"]');
        
        checkEmail === '' ? (setErrorMessage(loginSubmit ? emailElement : registerEmailElement ,'Email is required')) :
        (isValidEmail(checkEmail) ?
        (
            validEmail.current = true,
            objectFromDB.current = checkSuccess(checkEmail),
            !loginSubmit ?
                (
                    objectFromDB.current ?
                        (accountExist.current = true, setErrorMessage(registerEmailElement, 'Account already exists')) :
                            (setValidMessage(registerEmailElement),
                            accountExist.current = false,
                            (
                                checkPassword === '' ?
                                    setErrorMessage(registerPasswordElement,'Password is required') :
                                        (
                                            isValidPassword(checkPassword) ?
                                            (validPassword.current = true, setValidMessage(registerPasswordElement)) :
                                            (setErrorMessage(registerPasswordElement,'Enter a valid password'),
                                            validPassword.current = false)
                                        )
                            )
                        )
                ) :
            (objectFromDB.current ?
                (
                    setValidMessage(emailElement),
                    validPassword.current = true,
                    checkPassword === '' ?
                        setErrorMessage(loginSubmit ? passwordElement : registerPasswordElement,'Password is required') :
                            (fetchedUserDetails.current.storedUserPassword === checkPassword ?
                                (
                                    setValidMessage(passwordElement),
                                    setLoginSuccess(true),
                                    restrictTouch(2000),
                                    setTimeout(() => {
                                        localStorage.setItem('loginValidation',JSON.stringify({
                                            validSession : true,
                                            companyName : fetchedUserDetails.current.storedCompanyName,
                                        }));
                                        setloginSubmit(false);
                                        setLoginSuccess(false);
                                        props.setLoginPrompt(true);
                                        props.setLoginRequest(false);
                                        props.updateValidation();
                                        clearStateValues();
                                        document.body.style.overflow = 'auto';
                                    }, 2500)
                                ) :
                            setErrorMessage(passwordElement,'Password Incorrect'))
                ):
            setErrorMessage(emailElement, 'Account does not exist. Please create a new account')
        )) : setErrorMessage(loginSubmit ? emailElement : registerEmailElement,'Enter a valid email address'));
        objectFromDB.current = null;
    }

    useEffect(()=>{
        clearStateValues();
        setClearRegisterSV(true);
    },[props.loginRequest])

    function clearStateValues(){
        setEmail('');
        setPassword('');
        document.querySelectorAll('input').forEach((el)=>(el.value='',el.classList.remove('valid','error')));
        document.querySelectorAll('.error_message').forEach((el)=>el.textContent='');
    }
  
    const checkSuccess = (checkEmail)=>{
        console.log(typeof(localUserDetails), localUserDetails, 'error here');
        return localUserDetails.some((obj)=>{
            if(obj.email === checkEmail){
                fetchedUserDetails.current.storedUserPassword = obj.password;
                fetchedUserDetails.current.storedCompanyName = obj.companyName;
                return true;
            }
            return null;
        });
    }

    const isValidEmail = (email) => {
        const regularExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExp.test(String(email).toLowerCase())
    }

    const isValidPassword = (password) =>{
        const regularExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regularExp.test(String(password))
    }

    const handleToggle = ()=>{ setloginSubmit(!loginSubmit) }

    useEffect(()=>{
        auth_comp && auth_comp.classList.toggle('switch');
    },[loginSubmit])

    function restrictTouch(time){
        document.body.style.pointerEvents = 'none';
        setTimeout(() => {
            document.body.style.pointerEvents = 'auto';
        }, time);
    }

    const propsToPass = {
        handleSubmit,
        handleToggle,
        setErrorMessage,
        setValidMessage,
        setloginSubmit,
        validEmail,
        validPassword,
        localUserDetails,
        auth_comp,
        restrictTouch,
        clearRegisterSV,
        setClearRegisterSV,
        setRegistrationPrompt : props.setRegistrationPrompt,
    }

    return <Backdrop className='muiBackdrop' open={props.loginRequest} onClick={(e)=>props.loginClose(e)} sx={auth_styles}>
                <AuthContext.Provider value={{email,setEmail,password,setPassword,loginSuccess,accountExist}}>
                <div className='auth_comp'>
                    <Register {...propsToPass}/>
                    <Login handleSubmit={handleSubmit} handleToggle={handleToggle}/>
                </div>
                <Rules loginSubmit={loginSubmit}/>
                </AuthContext.Provider>
            </Backdrop>
}