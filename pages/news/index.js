import React from 'react'

const NewsArticelList = ( {articles} ) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      {
        articles.map((article) => {
            return (
                <div key={article.id}>
                    <h2>
                        {article.id} {article.title} | {article.category}
                    </h2>
                </div>
            )
        })
      }
    </div>
  )
}
// const NewsArticelList = ( props ) => {
//   return (
//     <div>
//       <h1>List of News Articles</h1>
//       {
//         props.articles.map((article) => {
//             return (
//                 <div key={article.id}>
//                     <h2>
//                         {article.id} {article.title} | {article.category}
//                     </h2>
//                 </div>
//             )
//         })
//       }
//     </div>
//   )
// }

export default NewsArticelList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/news')
    const data = await response.json()

    return {
        props: {
            // articles: JSON.parse(JSON.stringify(data))
            articles: data
        }
    }
}