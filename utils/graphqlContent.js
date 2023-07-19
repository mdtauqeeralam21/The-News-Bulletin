
const space = process.env.SPACE_ID;
const accessToken = process.env.ACCESS_KEY

export async function graphqlContent(query) {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      },
    );
    const { data } = await res.json();
   
    return data.newsCollection;
  } catch (error) {
    console.error(error);
  }
}
export default graphqlContent;