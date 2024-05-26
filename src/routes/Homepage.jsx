import '../CSSfiles/homepage.sass'
import profile from '../assets/profilepic.jpg'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react'
import { Fab, Backdrop, CircularProgress } from '@mui/material'
import { Auth } from '../components/Auth'
import { Snackbar, Alert } from '@mui/material';
import { ContentSection } from '../components/homepage/contentsection'
import { Logo } from '../components/homepage/logo';
import { Footer } from '../components/homepage/footer';
import { logoutStyles, logoutTransitionStyles, promptStyles } from "../components/homepage/styling"

export const Homepage = ()=>{
    const [logoutButtonToggle, setLogoutButtonToggle] = useState(false);
    const [loginRequest, setLoginRequest] = useState(false);
    const [logoutRequest, setLogoutRequest] = useState(false);
    const [userSessionStart, setUserSessionStart] = useState(null);
    const [updatedLogoutStyles, setUpdatedLogoutStyles] = useState(logoutStyles);
    const [loginPrompt, setLoginPrompt] = useState(false);
    const [registrationPrompt, setRegistrationPrompt] = useState(false);
    let loginValidation = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        loginValidation.current = JSON.parse(localStorage.getItem('loginValidation'));
        loginValidation.current === null
            ? localStorage.setItem('loginValidation', JSON.stringify({
                validSession: false,
                companyName: ''
            }))
            : (loginValidation.current.validSession && setUserSessionStart(true));
        function observe(){
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        if(entry.target.tagName === 'IMG'){
                            entry.target.src = entry.target.dataset.img;
                        }
                        entry.target.classList.add('show');
                        setTimeout(() => {
                            entry.target.classList.remove('hid');
                        }, 2000);
                        observer.unobserve(entry.target);
                    }
                })
            });
            const hiddenElements = document.querySelectorAll('.hid');
            hiddenElements.forEach(element => observer.observe(element));
        }
        observe();
    },[])

    function updateValidation(){
        loginValidation.current = JSON.parse(localStorage.getItem('loginValidation'));
        setTimeout(() => {
            setLoginPrompt(false);
        }, 2000);
        setUserSessionStart(true);
    }

    const handleNavClick = (e)=>{
        if(e.target.tagName === 'A'){
            document.querySelector('.nav-bar a.active')?.classList.remove('active');
            e.target.classList.add('active');
        }
    }

    const handleDropdown = ()=>{
        if(userSessionStart){
            if(logoutButtonToggle){
                setUpdatedLogoutStyles(logoutStyles);
                setTimeout(() => {  
                    setLogoutButtonToggle(!logoutButtonToggle);
                }, 100);
            }else{
                setLogoutButtonToggle(!logoutButtonToggle);
                setTimeout(() => {
                    setUpdatedLogoutStyles({...logoutStyles, ...logoutTransitionStyles});
                }, 100);
            }   
        }
    }

    const handleLogin = ()=>{
        document.body.style.overflow = 'hidden';
        setLoginRequest(true);
    }

    const loginClose = (e)=>{
        if(e.target.classList.contains('muiBackdrop')){
            setLoginRequest(false);
            document.body.style.overflow = 'auto';
        }
    }

    const handleLogout = ()=>{
        setLogoutRequest(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            loginValidation.current = {
                validSession : false,
                companyName : ''
            }
            localStorage.setItem('loginValidation', JSON.stringify(loginValidation.current));
            document.body.style.overflow = 'auto';
            setLogoutRequest(false);
            setUserSessionStart(false);
            setLogoutButtonToggle(false);
            handleDropdown();
        }, 2000);
    }

    const handleTalentpageEntry = ()=>{
        loginValidation.current.validSession
            ? navigate('/talent-search') 
            : alert('Please register or login to acquire talents');
    }

    const authProps = {
        loginRequest,
        setLoginRequest,
        loginClose,
        updateValidation,
        userSessionStart,
        setLoginPrompt,
        setRegistrationPrompt,
    }

    return <div className="homepage">
        <div className="nav-bar">
            <Logo/>
            <nav onClick={handleNavClick}>
                <a href="#">Blog</a>
                <a href="#">Solutions</a>
                <a href="#">Partners</a>
                <a href="#">Services</a>
                <a href="#">About</a>
            </nav>
            <div className="profile-container">
            {
                userSessionStart
                    ? <div className="account">
                        <div className="profileName">{ loginValidation.current.companyName.toUpperCase() }</div>
                        {
                            logoutButtonToggle
                                &&  <Fab className='logout' onClick={handleLogout} variant="extended" color="primary" aria-label="logout" sx={updatedLogoutStyles}>
                                        Logout
                                        <i className='bi-box-arrow-right'></i>
                                    </Fab>
                        }
                    </div>
                    : <Fab
                    className='login'
                    onClick={handleLogin}
                    variant="extended"
                    color="primary"
                    aria-label="login"
                    sx={{width:'220px', fontSize:'16px', whiteSpace: 'nowrap', zIndex: 20}}
                    >
                        Register / Login
                    </Fab>
            }
                <div className="profile" title='Account settings'>
                    <img src={profile} alt="profile" onClick={handleDropdown}/>
                </div>
            </div>
        </div>
        <div className="sections">
            <ContentSection/>
            <div className="link-container">
                <button className="talentsearch-button" onClick={handleTalentpageEntry}>Talent search</button>
            </div>
        </div>
        <Footer/>
        <Auth {...authProps}/>
        <Snackbar open={registrationPrompt} autoHideDuration={2500} anchorOrigin={{ vertical : 'bottom', horizontal : 'center'}}>
            <Alert severity="success" sx={promptStyles}>Account registration successful</Alert>
        </Snackbar>
        <Snackbar open={loginPrompt} autoHideDuration={2500} anchorOrigin={{ vertical : 'bottom', horizontal : 'center'}}>
            <Alert severity="success" sx={promptStyles}>Login successful</Alert>
        </Snackbar>
        <Backdrop
            sx={{ color: '#fff', zIndex: 25 }}
            open={logoutRequest} >
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
}