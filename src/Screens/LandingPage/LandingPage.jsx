import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return <div className="landingPage">
        <div>
            <h1 className="landingGreeting">Assalamualaikum!</h1>
            <h3>Welcome to the Muslim Engineering Society Professor Guide!</h3>
        </div>

        <div>
            <h2 className="landingInstructions">Please select what you want to do:</h2>
            <div className="landingPageOptions">
            <Link to="/SubmissionForm"><button>Submit an Entry</button></Link>
            <Link to="/LookupPage"><button>Lookup a Class</button></Link>
            <Link to="/"><button>Vet Entries (Moderators Only)</button></Link>
            </div>
        </div>
    </div>
}

export default LandingPage;