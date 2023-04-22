import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function BlogDetail(){
    const params = useParams()
    const [article, setArticles] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect( function() {

        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)

            if(!request.ok){
                return setNotFound(true)
            }

            const response = await request.json()
            document.title = response.title

            setArticles(response)
            setLoading(false)
        }
        getArticle()
    },[params])

    if(notFound){
        return (
            <>
        <h2>hmmm...</h2> 
        <h1>Artikel tidak ditemukan :&lt;</h1>
            </>
        )
    }

    return(
        <section className="p-20" >
            {loading ? <i>loadingh banh</i>
            :  (
            <article className="card card-wrap" >
                <div className="card-wrapper" >
                <h1 className="card-judul" >{article.title}</h1>
                <img className="card-img" src={article.imageUrl} alt={article.title} width="100% "height="100%" />
                <p className="paragraph" >{article.summary}</p>
                <time className="tanggal" >{new Date(article.publishedAt).toLocaleDateString()}</time>
                <p>Source: <a href={article.url} target="_blank" rel="noreferrer" > 
                {article.newsSite} </a></p>
                </div>
            </article>
            )}
    </section>
    )
}