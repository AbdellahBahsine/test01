import './articles.styles.css';

import { useNavigate } from "react-router-dom";

import moment from 'moment';

const ArticlesComponent = ({posts, loadingArticles, setLoadingArticles, page, setPage}) => {

    const nextPage = () => {
        if(page >= posts.last_page){
            return;
        }
        
        setPage(page + 1)
        setLoadingArticles(true)
    }

    const prevPage = () => {
        if(page <= 1){
            return;
        }
        
        setPage(page - 1)
        setLoadingArticles(true)
    }

    const selectedPage = (p) => {
        if(page < 1 || page > posts.last_page || page === p){
            return;
        }

        setPage(p)
        setLoadingArticles(true)
    }

    const navigate = useNavigate();

    const handleClick = id => {
        navigate('/article/' + id);
    }

    return ( 
        <section id="articles" className="articles-component">
                {
                    loadingArticles ? <div className="loader__container"><div class="loader"></div></div> : 
                    posts?.data.length ?
                    <div className="articles-component__grid">
                        {
                            posts?.data.map(d => {
                                return (
                                    <div className="articles-component__article" key={d.id} onClick={() => handleClick(d.id)}>
                                        <div className="articles-component__image">
                                            <img src={`https://letravelerguide.s3.eu-west-3.amazonaws.com/public/images/posts/${d.image}`} alt={d.title} />
                                        </div>
                                        <div className="articles-component__content">
                                            <h2>{d.title}</h2>
                                            <span>{moment(d.created_at).format("MMMM Do YYYY, h:mm:ss a")}</span>
                                            <p>{d.body.slice(0, 100)}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <p className="not-found">Not found!</p>
                }

            {
                posts?.data.length ?
                <div className="pagination">
                    <button onClick={prevPage}><i className="fa fa-chevron-left"></i></button>
                    {[...Array(posts?.last_page)].slice(Math.max([...Array(posts?.last_page)].length - 5, 0)).map((x, i) =>
                        <button onClick={() => selectedPage(i + 1)} className={ page === i + 1 ? "active" : ""}>{i + 1}</button>
                    )}
                    <button onClick={nextPage}><i className="fa fa-chevron-right"></i></button>
                </div>
                : ''
            }
        </section>
    )
}

export default ArticlesComponent;