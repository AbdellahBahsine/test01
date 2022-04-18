import {useEffect, useState} from 'react';
import './articles.styles.css';

import DefaultHeaderComponent from '../../components/default-header';
import FooterComponent from '../../components/footer';

import Cookies from 'js-cookie';
import axios from 'axios';

const ArticlesPage = () => {

    const [posts, setPosts] = useState(null);
    const [footerPosts, setFooterPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingArticles, setLoadingArticles] = useState(true);
    const [loadingFooter, setLoadingFooter] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts?page=${page}`, { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}`
        } })
        .then(res => {
            setPosts(res.data)
            setLoading(false)
            setLoadingArticles(false)
        })
        .catch(err => console.log(err))
    }, [page])

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts', { headers: { 
            Accept: 'application/json',
            Authorization: `Bearer ${Cookies.get('authToken')}`
        } })
        .then(res => {
            setFooterPosts(res.data)
            setLoadingFooter(false)
        })
        .catch(err => console.log(err))
    }, [])

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

    return (
        <div className="articles-page">
            {
                loadingFooter ? <div className="loader__container"><div class="loader"></div></div> :
                <>      
                    <DefaultHeaderComponent />
                    <main>
                        <section className="articles">
                                
                            <div className="articles-component__grid">
                                {
                                    loadingArticles ? <div className="loader__container"><div class="loader"></div></div> : posts?.data.map(d => {
                                        return (
                                            <div className="articles-page__article" key={d.id}>
                                                <div className="articles-page__image">
                                                    <img src={`https://letravelerguide.s3.eu-west-3.amazonaws.com/public/images/posts/${d.image}`} alt={d.title} />
                                                </div>
                                                <div className="articles-page__content">
                                                    <h2>{d.title}</h2>
                                                    <span>{d.created_at}</span>
                                                    <p>{d.body.slice(0, 100)}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        

                        
                            <div className="pagination">
                                <button onClick={prevPage}><i className="fa fa-chevron-left"></i></button>
                                {[...Array(posts?.last_page)].map((x, i) =>
                                    <button onClick={() => selectedPage(i + 1)} className={ page === i + 1 ? "active" : ""}>{i + 1}</button>
                                )}
                                <button onClick={nextPage}><i className="fa fa-chevron-right"></i></button>
                            </div>
                            
                        </section>
                    </main>
            
                    <FooterComponent posts={footerPosts} />
            </>
            }
        </div>
    )
}

export default ArticlesPage;