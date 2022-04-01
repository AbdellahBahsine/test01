import './header.styles.css';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header-component">
            <Link to="/" className="logo">Le Traveler Guide</Link>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}

export default HeaderComponent;