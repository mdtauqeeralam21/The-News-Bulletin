import slugify from 'slugify';
import Newspage from "@/components/Newspage";
import Head from 'next/head';
import { useState } from 'react';

export async function getStaticProps(){
  try {
    const response = await fetch(process.env.NEWS_API_ENDPOINT);
    const data = await response.json();

    const newsWithSlugs = data.articles.map((article) => {
      const slug = slugify(article.title, { lower: true });
       return { ...article, slug };
    });

    const reqNews= newsWithSlugs;

    return{
    props:{
      news:reqNews
    },
    revalidate :30,
  }

  } catch (error) {
    console.log('Error fetching news:', error);
    return error;
  }
};

export default function News({news}) {
 
  const [newsPerPage, setnewsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / newsPerPage);
    const pages = [...Array(totalPages + 1).keys()].slice(1);
    const indexOflastNews= currentPage * newsPerPage;
    const indexOfFirstNews = indexOflastNews - newsPerPage;

    const visibleNews = news.slice(indexOfFirstNews,indexOflastNews);
   function prevoiusPageHandler(){
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
    }
   function nextpageHandler(){
        if(currentPage!==totalPages){
            setCurrentPage(currentPage+1);
        }
    }

    return (
      <>
      <Head>
        <title>Latest News</title>
        <meta name="description" content=" latest news, blogs,opinions, sports, foods, entertainment,fashion, technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <select className='mt-4' 
      onChange={(e)=>{
            setnewsPerPage(e.target.value);
        }}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
        </select>
      <div className="grid grid-cols-1 gap-3 p-3 md:scroll-auto md:grid-cols-4 md:grid-flow-row">
        {visibleNews.map((article) => (
          <Newspage key={article.title} article={article} />
        ))}
      </div>

      <div title='previous page' className='flex justify-center mt-4 gap-8 text-2xl border-black'>
      <div onClick={prevoiusPageHandler}
      className='rounded p-1 active:bg-blue-500'
      >Previous</div>
            <div className='flex gap-4'>{
                pages.map((page) =>
                    <div className={` ${currentPage===page ? "bg-blue-500 rounded p-1" : "" }`}
                    onClick={()=>setCurrentPage(page)} key={page}>
                        {` ${page} |`}
                    </div>)}
            </div>
            <div title='Next Page' onClick={nextpageHandler}
            className='rounded p-1 active:bg-blue-500'
            >Next</div>
            </div>
      </>
    );
  }
