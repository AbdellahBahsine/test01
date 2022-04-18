import {useEffect} from 'react';
import './home.styles.css';

import HomeHeaderComponent from '../../components/home-header';
import HeroComponent from '../../components/hero';
import ArticlesComponent from '../../components/articles';
import SidebarComponent from '../../components/sidebar';
import FooterComponent from '../../components/footer';


const HomePage = () => {

    useEffect(() => {
    
        const header = document.getElementById('header');
        const textOne = document.getElementById('textOne');
        const textTwo = document.getElementById('textTwo');
        const textThree = document.getElementById('textThree');

        textOne.classList.toggle('showOne');
        textTwo.classList.toggle('showTwo');
        textThree.classList.toggle('showThree');
        header.classList.add('show')
        
      }, []);

    return(
        <div className="home-page">
            <HomeHeaderComponent />
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