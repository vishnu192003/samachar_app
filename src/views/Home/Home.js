import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import "./Home.css"

function Home() {
    const [news , setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState()

    const loadNews = async ()=>{
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-15&to=2024-07-15&sortBy=popularity&apiKey=a12ad439c4264bc196fe1f504f7e8250`);

            setNews(response.data.articles)
        }
        catch(error){
            console.log(error)
        }
        }

        useEffect(()=>{
            loadNews()
        },[])

        useEffect(()=>{
            loadNews()
        },[searchQuery])

    


  return (
    <div className=''>
    <h1 className='heading'>समाचार APP 📰</h1>
    <input type="text" placeholder='click here to search ' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='search'/>
    <div className='container'>
    {
        news.map((newsArticle, index)=>{
            const {author, title, description, url, urlToImage, publishedAt, content} = newsArticle

            return(
                <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
            )
        })
    }  
    </div>  
   </div>
  )
}

export default Home