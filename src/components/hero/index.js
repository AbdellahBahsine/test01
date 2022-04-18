import './hero.styles.css';

const HeroComponent = () => {

    return (
        <section className="hero-component">
            <div className="hero__image"></div>
            <p className="textOne" >Hello! Welcome to</p>
            <h1 className="textTwo" ><span>L</span>e <span>T</span>raveler <span>G</span>uide</h1>
            <p className="textThree" >A blog that's going to introduce you to amazing places in the world.</p>
        </section>
    )
}

export default HeroComponent;