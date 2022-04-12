import './hero.styles.css';

const HeroComponent = () => {

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