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
    <div className="grid grid-cols-2 md:grid-cols-4">
      {news.map(item => (
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
          </>
  )
}
