import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt, content}) {
    return (
        <div className='news-card'>
            <img src={urlToImage} alt="" srcset="" className='img' />
            <h1 className='title'>{title}</h1>
            <div className='article-info'>
                <p>{author}</p>
                <p>{publishedAt}</p>
            </div>
            <p>{description}</p>
            <a href={url} target='_blank' rel='noopener noreferrer' className='url'>Read More</a>
        </div>
    )
}

export default NewsArticle