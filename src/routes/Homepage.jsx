import { Link } from "react-router-dom";

export const Homepage = ()=>{

    const handleNavClick = (e)=>{
        e.target.tagName === 'A' && (document.querySelectorAll('.top_bar a').forEach((element)=>element.classList.remove('active')),
        e.target.classList.add('active'));
    }

    setTimeout(() => {
        let options = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "-500px",
            threshold: 1.0,
          };

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                entry.isIntersecting &&
                (
                    entry.target.classList.add('show'),
                    observer.unobserve(entry.target)
                );
            })
        },[options]);
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
            <div className="profile"><img src="src\assets\profilepic.jpg" alt="profile"/></div>
        </div>
        <div className="sections">
            <div className="main_content">
                <h1 className="hid left">We change the way you <span>hire.</span></h1>
                <img className="hid right" src="src\assets\image1.svg" width={700}/>
            </div>
            <div className="mid_content">
                <img className="hid left" src="src\assets\image2.svg" width={700}/>
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
                <img className="hid right" src="src\assets\image3.svg" width={600}/>
            </div>
            <div className="mobile_content hid">
                <img className="hid left" src="src\assets\image9.svg" width={600}/>
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