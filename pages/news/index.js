import slugify from 'slugify';
import { useEffect,useState } from 'react';
import Newspage from "@/components/Newspage";
import Skeleton from '@/components/Skeleton';

export default function News() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-07-13&to=2023-07-13&sortBy=popularity&apiKey=824cd70e296b4622a3ae94a3b90d6ae1'); // Replace with your API endpoint
          const data = await response.json();
  
          // Generate slugs from titles
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
      
      <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-3">
        {news.slice(0,6).map((article) => (
          <Newspage key={article.title} article={article} />
        ))}
      </div>
    );
  }
