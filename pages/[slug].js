import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "news",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  const { items: allNews } = await client.getEntries({
    content_type: "news",
  });

  return {
    props: { sport: items[0], allNews },
  };
};

export default function SportsDetails({ sport, allNews }) {
  const { title, description, author, date } = sport.fields;

  const DEFAULT_DESCRIPTION =
    "Welcome! Select a news title to view its details.";

  const [selectedNews, setSelectedNews] = useState(null);
  const titlesRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClick = (thumbnail) => {
    const newsItem = allNews.find(
      (item) => item.fields.thumbnail === thumbnail
    );
    setSelectedNews(newsItem);
  };

  useEffect(() => {
    // Set the first news item as the default selected news
    if (!selectedNews && allNews.length > 0) {
      setSelectedNews(allNews[0]);
    }

    const titlesContainer = titlesRef.current;
    const scrollHeight = titlesContainer.scrollHeight;
    const clientHeight = titlesContainer.clientHeight;

    if (scrollHeight > clientHeight) {
      const scrollStep = 1; // Adjust the scroll step for slower or faster scrolling
      const scrollDelay = 50; // Adjust the scroll delay for slower or faster scrolling

      const scrollAnimation = () => {
        if (titlesContainer.scrollTop < scrollHeight - clientHeight) {
          titlesContainer.scrollTop += scrollStep;
        } else {
          titlesContainer.scrollTop = 0;
        }

        if (titlesContainer.scrollTop === 0) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);
        } else {
          timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);
        }
      };

      timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);

      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [allNews, selectedNews]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-4">
        <div className="pt-5">
          <h1 className="text-4xl p-5">
            {selectedNews ? selectedNews.fields.title : title}
          </h1>
          <h3 className="text-2xl p-5">
            {selectedNews ? selectedNews.fields.author : author}{" "}
            <span className="bg-grey-200 ml-12 ">
              {selectedNews ? selectedNews.fields.date : date}
            </span>
          </h3>
        </div>

        <div className="pt-4 pl-5">
          <Image
            className="rounded"
            src={
              selectedNews
                ? "https:" + selectedNews.fields.thumbnail.fields.file.url
                : "/path_to_default_image"
            }
            width={
              selectedNews?.fields.thumbnail.fields.file.details.image.width ||
              500
            }
            height={
              selectedNews?.fields.thumbnail.fields.file.details.image.height ||
              500
            }
            alt="a news picture"
          />
        </div>
      </div>
      <div className="text-lg indent-150 mt-8 p-3 font-normal text-justify text-xl font-sans md:col-span-5 overflow-auto">
        <div className="scrollbar" style={{ maxHeight: "50vh" }}>
          {selectedNews
            ? documentToReactComponents(selectedNews.fields.description)
            : DEFAULT_DESCRIPTION}
        </div>
      </div>
      <div className="mt-8 font-normal text-justify font-sans md:col-start-10 md:col-end-13 overflow-auto">
        <div
          ref={titlesRef}
          className="scrollbar"
          style={{
            maxHeight: "calc(80vh - 8rem)",
            overflowY: "auto",
            overflowX: "hidden",
            backgroundColor: "white",
            margin: 0,
            padding: 8,
          }}
        >
          {[...allNews, ...allNews].map((item, index) => (
            <Link
              href="#"
              key={item.sys.id}
              className={`hover:underline ${
                selectedNews === item ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick(item.fields.thumbnail)}
            >
              {item.fields.title}
              <hr />
              <br /> <br />
              {index === allNews.length * 2 - 1 && (
                <span ref={titlesRef}></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
