import '../CSSfiles/homepage.sass'
import profile from '../assets/profilepic.jpg'
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image9 from '../assets/image9.svg'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react'
import { Fab, Backdrop, CircularProgress } from '@mui/material'
import { Auth } from '../components/Auth'
import { Snackbar, Alert } from '@mui/material';

export const Homepage = ()=>{

    const [logoutButtonToggle, setLogoutButtonToggle] = useState(false);
    const [loginRequest, setLoginRequest] = useState(false);
    const [logoutRequest, setLogoutRequest] = useState(false);
    const [userSessionStart, setUserSessionStart] = useState(null);
    const logoutTransitionStyles = { transform: 'translateY(60px)' }
    let logoutStyles = {
        display: 'none',
        position: 'absolute',
        top: '44px',
        right: '132px',
        width: '140px',
        height: '38px',
        fontSize: '16px',
        gap: '8px',
        zIndex:'4',
        transition: 'transform .3s'
    }
    const [updatedLogoutStyles, setUpdatedLogoutStyles] = useState(logoutStyles);
    const [loginPrompt, setLoginPrompt] = useState(false);
    const [registrationPrompt, setRegistrationPrompt] = useState(false);
    const promptStyles = {
        width:'400px',
        height:'50px',
        fontSize:'24px',
        marginBottom:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
    let loginValidation = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        loginValidation.current = JSON.parse(localStorage.getItem('loginValidation'));
        loginValidation.current === null ? localStorage.setItem('loginValidation',JSON.stringify({
            validSession: false,
            companyName: ''
        })) : (loginValidation.current.validSession && setUserSessionStart(true));
    },[])

    useEffect(()=>{
        setUpdatedLogoutStyles(logoutButtonToggle ? {...logoutStyles, ...logoutTransitionStyles} : logoutStyles)
    },[logoutButtonToggle])

    function updateValidation(){
        loginValidation.current = JSON.parse(localStorage.getItem('loginValidation'));
        setTimeout(() => {
            setLoginPrompt(false);
        }, 2000);
        setUserSessionStart(true);
    }

    const handleNavClick = (e)=>{
        e.target.tagName === 'A' && (document.querySelectorAll('.top_bar a').forEach((element)=>element.classList.remove('active')),
        e.target.classList.add('active'));
    }

    setTimeout(() => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                entry.isIntersecting &&
                (
                    entry.target.classList.add('show'),
                    setTimeout(() => {   
                        entry.target.classList.remove('hid')
                    }, 2000),
                    observer.unobserve(entry.target)
                );
            })
        });
        const hiddenElements = document.querySelectorAll('.hid');
        hiddenElements.forEach((element)=>observer.observe(element));
    }, 500);

    const handleDropdown = ()=>{
        userSessionStart &&
            (logoutButtonToggle ?
            (
                setLogoutButtonToggle(!logoutButtonToggle),
                setTimeout(() => {   
                    document.querySelector('.logout').style.display = 'none';
                }, 100)
            ) :
            (document.querySelector('.logout').style.display = 'flex',
            setTimeout(() => {
                setLogoutButtonToggle(!logoutButtonToggle);
            }, 100)))
    }

    const handleLogin = ()=>{
        document.body.style.overflow = 'hidden';
        setLoginRequest(true);
    }

    const loginClose = (e)=>{
        e.target.classList.contains('muiBackdrop') && (setLoginRequest(false), document.body.style.overflow = 'auto')
    }

    const handleLogout = ()=>{
        setLogoutRequest(true);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            loginValidation.current = {
                validSession : false,
                companyName : ''
            }
            localStorage.setItem('loginValidation', JSON.stringify(loginValidation.current))
            document.body.style.overflow = 'auto';
            setLogoutRequest(false);
            setUserSessionStart(false);
            setLogoutButtonToggle(false);
            handleDropdown();
        }, 2000);
    }

    const handleTalentpageEntry = ()=>{
        loginValidation.current.validSession ? navigate('/talent-search') :alert('Please register or login to acquire talents')
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
        <div className='brand'>
          <h2 className='brand_name'>Recruitment Solutions</h2>
          <h2 className='brand_logo'>RS</h2>
        </div>
        <div className="top_bar" onClick={handleNavClick}>
            <nav>
                <a href="#">Blog</a>
                <a href="#">Solutions</a>
                <a href="#">Partners</a>
                <a href="#">Services</a>
                <a href="#">About</a>
            </nav>
            {userSessionStart ? <div className="profileName">{(loginValidation.current.companyName).toUpperCase()}</div> :
            <Fab className='login' onClick={handleLogin} variant="extended" color="primary" aria-label="login"
                sx={{width:'220px', fontSize:'17px', zIndex: 20}}>
                Register / Login
            </Fab>}
            <div className="profile" title='Account settings'><img src={profile} alt="profile" onClick={handleDropdown}/></div>
        </div>
        <Fab className='logout' onClick={handleLogout} variant="extended" color="primary" aria-label="logout" sx={updatedLogoutStyles}>
            Logout
            <i className='bi-box-arrow-right'></i>
        </Fab>
        <Backdrop
            sx={{ color: '#fff', zIndex: 25 }}
            open={logoutRequest} >
            <CircularProgress color="inherit" />
        </Backdrop>
        <div className="sections">
            <div className="main_content">
                <h1 className="hid left">We change the way you <span>hire.</span></h1>
                <img className="hid right" src={image1} width={700} alt="image1"/>
            </div>
            <div className="mid_content">
                <img className="hid left" src={image2} width={700} alt="image2"/>
                <h2 className="hid right">We're sector specialists</h2>
                <p className="hid right">The Recruitment Solutions team has been helping
                great candidates get jobs with amazing companies since 2008.
                We recruit for both temporary and permanent roles. We specialise
                in recruiting in all sector.</p>
            </div>
            <div className="end_content">
                <h3 className="hid left">Organize your vacancies and job applications</h3>
                <p className="hid left">Set up your job board, promote your job listings and easily keep track of submitted applications.
                    Follow every applicant and build a database of skills and profiles with indexed documents.
                    No need to outsource your recruitment - handle everything internally in a simple and professional way.
                </p>
                <img className="hid right" src={image3} width={600} alt="image3"/>
            </div>
            <div className="mobile_content hid">
                <img className="hid left" src={image9} width={600} alt="image9"/>
                <h2 className="hid right">Progressive Mobile Application</h2>
                <div className="hid right">
                    <h3>Access our app from your computer, phone, or tablet to ensure you never miss any activity, wherever you are.</h3>
                    <p><span>Recruit on the go:</span> Access all the app features from all your devices.</p>
                    <p><span>Receive notifications:</span> Get notified for reminders, and specific events.</p>
                </div>
            </div>
            <div className="link_container">
                <button className="talentsearch_button" onClick={handleTalentpageEntry}>Talent search</button>
            </div>
            <footer className="hid bottom">
                <div><i className="hid bi bi-facebook"></i><span>Facebook</span></div>
                <div><i className="hid bi bi-instagram"></i><span>instagram</span></div>
                <div><i className="hid bi bi-linkedin"></i><span>linkedin</span></div>
                <div><i className="hid bi bi-twitter"></i><span>twitter</span></div>
                <div><i className="hid bi bi-discord"></i><span>discord</span></div>
            </footer>
        </div>
        <Snackbar open={registrationPrompt} autoHideDuration={2500} anchorOrigin={{ vertical : 'bottom', horizontal : 'center'}}>{
            <Alert severity="success" sx={promptStyles}>Account registration successful</Alert>}
        </Snackbar>
        <Snackbar open={loginPrompt} autoHideDuration={2500} anchorOrigin={{ vertical : 'bottom', horizontal : 'center'}}>{
            <Alert severity="success" sx={promptStyles}>Login successful</Alert>}
        </Snackbar>
        <Auth {...authProps}/>
    </div>
}