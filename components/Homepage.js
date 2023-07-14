import Link from 'next/link'
import Image from 'next/image'


export default function Homepage({ news }) {
  const { title,author,tags,thumbnail,slug } = news.fields;

  return (
    <div className="card border-b-4 border-black">
      <div className="featured">
        <Image className='rounded'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
      </div>
        {/* <div className="card rounded p-1"> */}
        <div className='text-lg font-light font-sans'>{ tags }</div>
        <Link href={'/'+slug}>
          <div className='text-blue-700 text-xl font-sans'>{ title.slice(0,45)+'...' }</div>
          </Link>
          <div className='text-xl mt-2'>By: { author } </div>
        
        <div className="bg-blue-600 h-7 w-1/3 rounded-full text-center text-white mt-3">
           <Link href={'/'+slug}>read more</Link> 
        </div>
      {/* </div> */}
    </div>
  )
}