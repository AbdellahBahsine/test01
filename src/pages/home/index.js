import './home.styles.css';

import HeaderComponent from '../../components/header';
import HeroComponent from '../../components/hero';
import ArticlesComponent from '../../components/articles';
import SidebarComponent from '../../components/sidebar';
import FooterComponent from '../../components/footer';


const HomePage = () => {

    return(
        <div className="home-page">
            <HeaderComponent />
            <HeroComponent />
            <main>                
                <ArticlesComponent />
                <SidebarComponent />
            </main>
            <FooterComponent />
        </div>
    )
}

export default HomePage;