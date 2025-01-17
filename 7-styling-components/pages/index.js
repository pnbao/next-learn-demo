import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = ({ show }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <PostLink key={show.id} show={show}/>
      ))}
    </ul>
    <style jsx>{`
        h1,
        a {
          font-family: 'Times New Roman';
        }

        ul {
          padding: 0;
        }
      `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
