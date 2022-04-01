import './hero.styles.css';

const HeroComponent = () => {

    window.addEventListener('load', (event) => {
        const textOne = document.getElementById('textOne');
        const textTwo = document.getElementById('textTwo');
        const textThree = document.getElementById('textThree');

        textOne.classList.toggle('showOne');
        textTwo.classList.toggle('showTwo');
        textThree.classList.toggle('showThree');
    });

    return (
        <section className="hero-component">
            <div className="hero__image"></div>
            <p id="textOne" >Hello! Welcome to</p>
            <h1 id="textTwo" ><span>L</span>e <span>T</span>raveler <span>G</span>uide</h1>
            <p id="textThree" >A blog that's going to introduce you to amazing places in the world.</p>
        </section>
    )
}

export default HeroComponent;