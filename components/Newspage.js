import Link from 'next/link'
import Image from 'next/image'


export default function Newspage({ article }) {
  const { title,author } = article;

  return (
    <div className="card border-b-4 border-black p-2">
        <div>{title}</div>
        <div>{author}</div>



      {/* <div className="featured">
        <Image className='rounded'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
      </div> */}
        {/* <div className="card rounded p-1"> */}
        {/* <div className='text-lg font-light font-sans rounded-full border-1 border-black'>{ tags }</div>
        <Link href={'/'+slug}>
          <div className='text-blue-700 text-xl font-sans hover:text-blue-950'>{ title.slice(0,45)+'...' }</div>
          </Link>
          <div className='text-xl mt-2'>By: { author } </div>
        
          <Link href={'/'+slug}>
        <div className="bg-blue-700 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1 mr-0 ml-auto hover:bg-blue-400">
           read more
           </div>
           </Link> 
         */}
      {/* </div> */}
    </div>
  )
}