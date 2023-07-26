import Link from 'next/link'
import Image from 'next/image'


export default function Homepage({ news }) {
  const { title,author,tags,thumbnail,slug } = news.fields;

  return (
    <div className="card relative font-Playfair mt-4 p-2">
      <div className="featured">
        <Image className='w-full md:rounded md:active:scale-150'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
      </div>
      <div>
        <div className='text-lg font-light font-sans rounded-full border-black'>{ tags }</div>
        <Link href={'/'+slug}>
          <div className='text-blue-700 text-xl hover:underline active:text-blue-950'>{ title.slice(0,45)+'...' }</div>
          </Link>
          <div className='text-lg w-2/3 md:text-lg mt-2 md:overflow-hidden md:w-2/3'>By: { author } </div>
        <div>
          <Link className='justify-end'
          href={'/'+slug}>
        <div className="absolute bottom-1 right-1 bg-blue-600 h-8 w-1/4 rounded-full text-center overflow-hidden text-white p-1  hover:underline active:bg-blue-900">
           read more
           </div>
           </Link>
           </div>
           </div> 
    </div>
  )
}