import Link from 'next/link'
import Image from 'next/image'


export default function Homepage({ news }) {
  const { title,author,tags,images,date } = news.fields

  return (
    <div className="card m-2 bg-green-50">
      <div className="featured">
        <Image
        // src={'https://images.ctfassets.net/mbt78vdswgbs/7IN062w3YIzUBChmFemqw1/dea3d851855884976e243dfc66463df3/10kohli.jpg'}
         src={ 'https://'+ images.map(image=>image.fields.file.url)  }
        // width={image.fields.file.details.image.width}
        // height={image.fields.file.details.image.height}
        width={`300`}
        height={`450`}
        alt='Kohli and Dravid picture'
        />
      </div>
      <div className="bg-blue-50">
        <div className="card rounded p-1">
          <h1 className='text-blue-600 text-2xl'>{ title }</h1>
          <p className='text-lg'>By: { author } </p>
          <h2 className='text-xl'>Category:{tags }</h2>
          <p className='text-lg'>On: { date }</p>
        </div>
        {/* <div className="actions">
           <Link href={'/sports/'+slug} legacyBehavior><a>see This</a></Link> 
        </div> */}
      </div>
    </div>
  )
}