import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js" />
        <PostLink id="deploy-nextjs" title="Deploy Next.js" />
      </ul>
    </Layout>
  )
}
