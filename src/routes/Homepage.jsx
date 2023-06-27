import { Link } from "react-router-dom";
import profile from '../assets/profilepic.jpg'
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image9 from '../assets/image9.svg'

export const Homepage = ()=>{
    
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
                    observer.unobserve(entry.target)
                );
            })
        });
        const hiddenElements = document.querySelectorAll('.hid');
        hiddenElements.forEach((element)=>observer.observe(element));
    }, 300);


    return <div className="homepage">
        <div className="top_bar" onClick={handleNavClick}>
            <nav>
                <a href="#">Blog</a>
                <a href="#">Solutions</a>
                <a href="#">Partners</a>
                <a href="#">Services</a>
                <a href="#">About</a>
            </nav>
            <div className="profile"><img src={profile} alt="profile"/></div>
        </div>
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
                <Link className="talentsearch_button" to='/talentsearch'>Talent search</Link>
            </div>
            <footer className="hid bottom">
                <i className="hid bi bi-facebook"></i>
                <i className="hid bi bi-instagram"></i>
                <i className="hid bi bi-linkedin"></i>
                <i className="hid bi bi-twitter"></i>
                <i className="hid bi bi-discord"></i>
            </footer>
        </div>
    </div>
}