import Link from 'next/link'
import Image from 'next/image'


export default function Newspage({ article }) {
  const { title,author,description,urlToImage,content } = article;
  console.log(article);

  return (
    <div className="card border-b-4 border-black p-2">
      <div className="featured">
        <Image className='rounded'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={ urlToImage}
        //  width={urlToImage.fields.file.details.image.width}
        //  height={urlToImage.fields.file.details.image.height}
         width={`500`}
         height={`650`}
        alt='a news picture'
        />
      </div>
        
        
          <div className='text-blue-700 text-xl font-sans hover:text-blue-950'>{ title }</div>
      
          <div className='text-xl mt-2'>By: { author } </div>
        
          {/* <Link href={'/'+slug}>
        <div className="bg-blue-700 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1 mr-0 ml-auto hover:bg-blue-400">
           read more
           </div> 
           </Link> */}
        
       </div>
    
  )
}