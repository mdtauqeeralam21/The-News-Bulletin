import Homepage from '@/components/Homepage'
import { createClient } from 'contentful'

export async function getStaticProps(){
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "news" })

  return {
    props: {
      news: res.items,
    }
  }
}

export default function Home({ news }) {
  console.log(news);
  return (
    <>
    <h1>fetching data</h1>
    <div className="recipe-list">
      {news.map(item => (
        <Homepage key={item.sys.id} news={item} />
      ))}

<style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
          </>
  )
}
