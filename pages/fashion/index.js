import Homepage from '@/components/Homepage'
import { createClient } from 'contentful'
import Head from 'next/head'

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

export default function Fashion({ news }) {
  console.log(news);
  return (
    
    <>
    <Head>
        <title>Fashion</title>
        <meta name="description" content=" latest news, western style, Indian style,Mens fashion, women fashion, kids fashion,fashion designing,men styles,women style, fashion blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Fashion').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>

        </>
    )
}