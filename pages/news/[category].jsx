import React from 'react'
function ArticleListByCategory({ articles, category }) {
    return (
      <>
        <h1>Showing news for category {category}</h1>
        {articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        })}
      </>
    )
  }

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params, query } = context

    console.log(query)
    const { category } = params

   
    const response = await fetch(
        `http://localhost:3000/api/news?category=${category}`
      )
    //    The above query does not seem to work with the news api created 
    const data = await response.json()


   

    return {
        props: {
          articles: data,
          category,
        }
      }
    }