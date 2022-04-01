import './header.styles.css';
import {Link} from "react-router-dom";

const HeaderComponent = () => {

    window.addEventListener('load', (event) => {
        const header = document.getElementById('header');

        header.classList.toggle('show')
    });

    return (
        <header id="header" className="header-component">
            <Link to="/" className="logo">Le Traveler Guide</Link>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default HeaderComponent;