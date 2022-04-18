import {useEffect, useState} from 'react';
import './articles.styles.css';

import axios from 'axios';
import Cookies from 'js-cookie';

const ArticlesComponent = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/home?page=${page}`, { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}`
        } })
        .then(res => {
            setPosts(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [page])

    const nextPage = () => {
        if(page >= posts.last_page){
            return;
        }
        
        setPage(page + 1)
        setLoading(true)
    }

    const prevPage = () => {
        if(page <= 1){
            return;
        }
        
        setPage(page - 1)
        setLoading(true)
    }

    const selectedPage = (p) => {
        if(page < 1 || page > posts.last_page || page === p){
            return;
        }

        setPage(p)
        setLoading(true)
    }

    return ( 
        <section id="articles" className="articles-component">
                {
                    loading ? <div className="loader__container"><div class="loader"></div></div> : 
                    <div className="articles-component__grid">
                        {
                            posts?.data.map(d => {
                                return (
                                    <div className="articles-component__article" key={d.id}>
                                        <div className="articles-component__image">
                                            <img src={`https://letravelerguide.s3.eu-west-3.amazonaws.com/public/images/posts/${d.image}`} alt={d.title} />
                                        </div>
                                        <div className="articles-component__content">
                                            <h2>{d.title}</h2>
                                            <span>{d.created_at}</span>
                                            <p>{d.body.slice(0, 100)}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

            {
                loading ? "" : <div className="pagination">
                    <button onClick={prevPage}><i className="fa fa-chevron-left"></i></button>
                    {[...Array(posts?.last_page)].map((x, i) =>
                        <button onClick={() => selectedPage(i + 1)} className={ page === i + 1 ? "active" : ""}>{i + 1}</button>
                    )}
                    <button onClick={nextPage}><i className="fa fa-chevron-right"></i></button>
                </div>
            }
        </section>
    )
}

export default ArticlesComponent;