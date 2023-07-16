import Link from 'next/link'
import Image from 'next/image'


export default function Newspage({ article }) {
  const { title, author, urlToImage,slug } = article;
  console.log(article);

  return (
    <div className="card relative border-b-4 border-black p-2">
      <div className="featured">
        <Image className='h-48 mb-3 rounded'
          src={urlToImage}
          width={`500`}
          height={`650`}
          alt='a news picture'
        />
      </div>
      <Link href={"/news/"+slug}>
      <div className='text-blue-700 text-xl hover:underline active:text-blue-950'>{title}</div>
      </Link>
      <div className='text-base md:text-xl mt-2 overflow-hidden'>By: {author} </div>

      <Link href={'/news/' +slug}>
        <div className="absolute bottom-1 right-1 bg-blue-600 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1  hover:underline active:bg-blue-900">
          read more
        </div>
      </Link>

    </div>

  )
}