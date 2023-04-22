import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

export default function Blog (){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( function() {
        document.title = 'News'
    async function getArticles(){
        const request = await fetch('https://api.spaceflightnewsapi.net/V3/articles')
        const response = await request.json()
        
        setArticles(response)
        setLoading(false)
    }
    getArticles()
    }, [])
 return(
  <section className="p-20 blog">
    <h1 className="judulnya" >Latest news📰</h1>
      <h4>Tidak perlu dibaca.. XD</h4>
            {loading && ( <i>loadingh banh...</i>)} 
            {!loading &&(
                <div>
                    {articles.map(function(article){
                        return (
                            <article key={article.id} className="card card-wrap" >
                                <div className="card-wrapper" >
                                <figure>
                                <img className="card-imgs" src={article.imageUrl} alt={article.title} width="100%" height="100%" /> </figure>
                            <h2 className="card-judul-blog" >
                                <Link className="link" to={`/blog/${article.id}`}>
                                {article.title} </Link>
                                </h2>
                                
                                <p className="p" >Date : 
                            <time className="tanggal" >
                                {new Date(article.publishedAt).toLocaleDateString()}
                                </time>
                                </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

