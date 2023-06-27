import { createContext, useRef, useState } from 'react'
import { Login } from '../components/login'
import { Register } from '../components/register'
import { InfiniteSlider } from '../components/infiniteSlider';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const Auth = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerSubmit, setRegisterSubmit] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const Userlogindetails = useRef([]);
    const validEmail = useRef(false);
    const validPassword = useRef(false);
    const accountExist = useRef(false);
    const objectFromDB = useRef(undefined);
    const navigate = useNavigate()

    const setValidMessage = (element)=>{
        element.classList.remove('error');
        element.classList.add('valid');
        const removeError = element.nextElementSibling;
        removeError.innerText = '';
    }

    const setErrorMessage = (element, message)=>{
        element.classList.remove('valid');
        element.classList.add('error');
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
        
        checkEmail === '' ? (setErrorMessage(registerSubmit ? registerEmailElement : emailElement ,'Email is required')) :
        (isValidEmail(checkEmail) ?
        (
            validEmail.current = true,
            objectFromDB.current = checkSuccess(checkEmail),
            registerSubmit ?
                (objectFromDB.current ?
                    (accountExist.current = true, setErrorMessage(registerEmailElement, 'Account already exists')) :
                        (setValidMessage(registerEmailElement), isValidPassword(checkPassword) ? setValidMessage(registerPasswordElement) : setErrorMessage(registerPasswordElement, 'Enter a valid password'))) :
            (objectFromDB.current ?
            (
                setValidMessage(registerSubmit ? registerEmailElement : emailElement),
                checkPassword === '' ? setErrorMessage(passwordElement,'Password is required') :
                (
                    isValidPassword(checkPassword) ?
                    (
                        validPassword.current = true,
                        objectFromDB.current.password === checkPassword ?
                            (
                                setValidMessage(passwordElement),
                                setLoginSuccess(true),
                                setTimeout(() => {
                                    navigate('/homepage');
                                }, 1200)
                            ) :
                        setErrorMessage(passwordElement,'Password Incorrect')
                    ) :
                    setErrorMessage(passwordElement,'Enter a valid password')
                )
            ):
            setErrorMessage(emailElement, 'Account does not exist. Please create a new account')
        )) :
        setErrorMessage(registerSubmit ? registerEmailElement : emailElement,'Enter a valid email address'));
        objectFromDB.current = null;
    }
    
    const checkSuccess = (checkEmail)=>{
        return Userlogindetails.current.find((obj)=>{
            return obj.email === checkEmail
        })
    }

    const isValidEmail = (email) => {
        const regularExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExp.test(String(email).toLowerCase());
    }

    const isValidPassword = (password) =>{
        const regularExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regularExp.test(String(password))
    }

    const handletoggle = (e)=>{
        const auth_switch = document.querySelector('.auth_comp');
        const emailElement = document.querySelector('.email');
        e.target.dataset.component === 'login' ?
        (auth_switch.classList.add('switch'), setRegisterSubmit(true),setEmail(''),setPassword(''),emailElement.classList.remove('error'),emailElement.nextElementSibling.innerText = '') :
        (e.target.dataset.component === 'register' && (auth_switch.classList.remove('switch'), setRegisterSubmit(false)));
    }

    return <div className='auth'>
        <AuthContext.Provider value={{email,setEmail,password,setPassword,loginSuccess,accountExist,Userlogindetails}}>
        <InfiniteSlider/>
        <div className='auth_comp' onClick={handletoggle}>
            <Login handleSubmit={handleSubmit}/>
            <Register handleSubmit={handleSubmit} setErrorMessage={setErrorMessage} setValidMessage={setValidMessage} setRegisterSubmit={setRegisterSubmit} validEmail={validEmail} validPassword={validPassword}/>
        </div>
        </AuthContext.Provider>
    </div>
}