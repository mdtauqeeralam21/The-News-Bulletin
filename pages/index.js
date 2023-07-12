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
    <div className="grid grid-cols-1 p-1 md:grid-cols-3"> 
      {
      news.map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <div className="grid grid-cols-1 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Sports').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <div className="grid grid-cols-1 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Fashion').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <div className="grid grid-cols-1 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='News').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
          </>
  )
}
