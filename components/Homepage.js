import Link from 'next/link'
import Image from 'next/image'


export default function Homepage({ news }) {
  const { title,author,tags,thumbnail,slug } = news.fields;

  return (
    <div className="card font-Playfair border-b-4 border-black p-2">
      <div className="featured">
        <Image className='rounded active:scale-150'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
      </div>
        <div className='text-lg font-light font-sans rounded-full border-1 border-black'>{ tags }</div>
        <Link href={'/'+slug}>
          <div className='text-blue-700 text-xl hover:text-blue-950'>{ title.slice(0,45)+'...' }</div>
          </Link>
          <div className='text-xl mt-2'>By: { author } </div>
        
          <Link className='justify-end'
          href={'/'+slug}>
        <div className="bg-blue-700 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1 mr-0 ml-auto mb-1 hover:bg-blue-400">
           read more
           </div>
           </Link> 
    </div>
  )
}