import { createClient } from 'contentful'
import Image from 'next/image'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: 'news' 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'news',
    'fields.slug': params.slug
  })

  return {
    props: { sport: items[0] }
  }

}

export default function SportsDetails({ sport }) {
  console.log(sport);
//   if(!sport) return <Skeleton/>
  const {thumbnail, title, description, author, date } = sport.fields;
  
  return (
    <div className='mx-64'>
      <div className="mt-24  justify-center">
        <div className='w-1/2 '>
        <Image 
            src={ 'https:'+ thumbnail.fields.file.url  }
        //   src={'https:' + thumbnail.fields.file.url}
           width={thumbnail.fields.file.details.image.width}
           height={thumbnail.fields.file.details.image.height}
          alt='Sports picture'
        />
        </div>
        <h2>{ title }</h2>
      </div>
      {/* <div>{description}</div> */}

      <div className="info">
        <p>{author}</p>
        <h3>{date}</h3>
        
      </div>

      <style jsx>
        {`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}