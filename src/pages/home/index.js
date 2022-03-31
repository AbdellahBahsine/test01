import './home.styles.css';

import HeaderComponent from '../../components/header';
import HeroComponent from '../../components/hero';
import ArticlesComponent from '../../components/articles';

const HomePage = () => {
    return(
        <div className="home-page">
            <HeaderComponent />
            <HeroComponent />
            <main>
                <ArticlesComponent />
            </main>
        </div>
    )
}

export default HomePage;