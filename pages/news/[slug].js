import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useSession,signIn,signOut } from 'next-auth/react'

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
      params: { slug: item.fields.slug}
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

export default function NewsDetails({ sport}) {
  const {data:session}= useSession();
  console.log(sport);
//   if(!sport) return <Skeleton/>
  const {thumbnail, title, description, author, date } = sport.fields;
 
  if(session){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 p-4">
        
            <div>
                <div className='p-2 pt-10'>
                <h1 className="text-4xl p-5">{title}</h1>
                <h3 className='text-2xl p-5'>{author}</h3>
                <div className='border-b-2 border-black ml-5'>{date.slice(0,10)}</div>
                </div>
                <div className='m-2 pt-10 pl-7'>
              
                <Image className='rounded'
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
                </div>            
            </div>
                <div className='text-lg indent-100 mt-16 p-3 font-normal text-xl font-Playfair'>
                {documentToReactComponents(description)}
                </div>
              
                </div>
  )
}
  else{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg p-2 bg-blue-800 w-1/3 text-center text-white font-semibold mb-4 rounded hover:bg-blue-400"
          onClick={()=> signIn()}>Sign in</h2>
        <p className="text-gray-700 text-xl mb-4">
          Please sign in to access the content.
        </p>
        <p className="text-gray-700 ">
          Sign in using your credentials to unlock the full experience.
        </p>
      </div>
    </div>
  );
}
}