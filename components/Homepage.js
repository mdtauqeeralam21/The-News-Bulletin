import Link from "next/link";
import Image from "next/image";

export default function Homepage({ news }) {
  const { title, author, tags, thumbnail, date } = news.fields;

  return (
    <div className="card m-1 bg-green-50">
      <div className="featured">
        <Image
          //  src={ 'https:'+ images.map(image=>image.fields.file.url)  }
          //src={'https:'+ thumbnail.fields.file.url}
          //width={thumbnail.fields.file.details.image.width}
          //height={thumbnail.fields.file.details.image.height}
          // width={`500`}
          // height={`650`}
          alt="a news picture"
        />
      </div>
      {/* <div className="bg-blue-50"> */}
      <div className="card rounded p-1">
        <div className="text-blue-600 text-2xl">{title}</div>
        <div className="text-lg">By: {author} </div>
        <div className="text-xl">Category:{tags}</div>
        <div className="text-lg">On: {date}</div>
        {/* </div> */}
        {/* <div className="actions">
           <Link href={'/sports/'+slug} legacyBehavior><a>see This</a></Link> 
        </div> */}
      </div>
    </div>
  );
}
