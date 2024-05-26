import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image3.svg'
import image9 from '../../assets/image9.svg'

export const ContentSection = () => {

    return (
        <>
        <div className="start-content">
            <h1 className="hid left">We change the way you <span>hire.</span></h1>
            <img className="hid right" src="#" alt="image1" data-img={image1}/>
        </div>
        <div className="mid-content">
            <div className="mid-title">
                <img className="hid left" src="#" alt="image2" data-img={image2}/>
                <h2 className="hid right">We're sector specialists</h2>
            </div>
            <p className="hid right">The Recruitment Solutions team has been helping
            great candidates get jobs with amazing companies since 2008.
            We recruit for both temporary and permanent roles. We specialise
            in recruiting in all sector.</p>
        </div>
        <div className="end-content">
            <div className="end-details">
                <h3 className="hid left">Organize your vacancies and job applications</h3>
                <p className="hid left">Set up your job board, promote your job listings and easily keep track of submitted applications.
                    Follow every applicant and build a database of skills and profiles with indexed documents.
                    No need to outsource your recruitment - handle everything internally in a simple and professional way.
                </p>
            </div>
            <img className="hid right" src="#" alt="image3" data-img={image3}/>
        </div>
        <div className="mobile-content hid">
            <img className="hid left" src="#" alt="image9" data-img={image9}/>
            <div className="hid right mobile-details">
                <h2>Progressive Mobile Application</h2>
                <h3>Access our app from your computer, phone, or tablet to ensure you never miss any activity, wherever you are.</h3>
                <p><span>Recruit on the go:</span> Access all the app features from all your devices.</p>
                <p><span>Receive notifications:</span> Get notified for reminders, and specific events.</p>
            </div>
        </div>
        </>
    )
}