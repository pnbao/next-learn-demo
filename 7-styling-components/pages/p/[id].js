import Markdown from 'react-markdown'
import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'


const Post = props => (
  <Layout>
      <h1>{props.show.name}</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### ${props.show.name}

And here's the content: ${props.show.summary}
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Times New Roman';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show }
};


export default Post;

