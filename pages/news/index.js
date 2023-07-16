import slugify from 'slugify';
import { useEffect,useState } from 'react';
import Newspage from "@/components/Newspage";
import Skeleton from '@/components/Skeleton';
import Head from 'next/head';

export default function News() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=824cd70e296b4622a3ae94a3b90d6ae1');
          const data = await response.json();
  
          const newsWithSlugs = data.articles.map((article) => {
            const slug = slugify(article.title, { lower: true });
            return { ...article, slug };
          });
  
          setNews(newsWithSlugs);
        } catch (error) {
          console.log('Error fetching news:', error);
          return error;
        }
      };
  
      fetchData();
    }, []);

  if(!news) return <Skeleton />
    
  
    return (
      <>
      <Head>
        <title>Latest News</title>
        <meta name="description" content=" latest news, blogs,opinions, sports, foods, entertainment,fashion, technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      
      <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-4 md:grid-flow-row">
        {news.slice(0,32).map((article) => (
          <Newspage key={article.title} article={article} />
        ))}
      </div>
      </>
    );
  }
