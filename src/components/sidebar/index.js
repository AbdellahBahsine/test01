import './sidebar.styles.css';

const SidebarComponent = () => {
    return (
        <section className="sidebar-component">
            <div className="search">
                <input type="text" placeholder='Search post...' />
                <button>Search</button>
            </div>

            <div className="line"></div>

            <div className="about">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos provident magnam illo obcaecati itaque harum, ipsa asperiores voluptate qui vitae quae aut, deleniti quidem assumenda alias molestias odit totam voluptate qui.</p>
            </div>
        </section>
    )
}

export default SidebarComponent;