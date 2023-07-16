import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);
export async function getStaticProps() {
  const query = `query getTitle{
    newsCollection{
      items{
        title
      }
    }
    
  }`;
  const data = await client.request(query);

  return {
    props: {
       data,
    },
  };
}

const YourComponent = ({data}) => {
  //const {title}=data
  console.log(data)
  return (
    <div className="marquee-container">
      {/* <div className="marquee">
        {titles.map(
          <div key={title}>{title}</div>
        )}
      </div> */}
    </div>
  );
};

export default YourComponent;
