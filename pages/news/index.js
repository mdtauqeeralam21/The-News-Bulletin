import slugify from 'slugify';
import { useEffect,useState } from 'react';
import Newspage from "@/components/Newspage";
import Skeleton from '@/components/Skeleton';

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
        }
      };
  
      fetchData();
    }, []);

  
  
    return (
      
      <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-4 md:grid-flow-row">
        {news.slice(0,20).map((article) => (
          <Newspage key={article.title} article={article} />
        ))}
      </div>
    );
  }
