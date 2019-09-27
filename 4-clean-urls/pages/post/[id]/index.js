import { useRouter } from 'next/router'
import Layout from '../../../components/MyLayout'
import Link from 'next/link'

const CommentLink = props => (
    <li>
    <Link href="/post/[id]/[comment]" as={`/post/${props.id}/${props.comment_id}`}>
      <a>{props.comment_title}</a>
    </Link>
  </li>
  )

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <h1>{id}</h1>
      <p>This is the blog post content.</p>
      <ul>
        <CommentLink id={id} comment_id='comment-1' comment_title='First Comment'/>
        <CommentLink id={id} comment_id='comment-2' comment_title='Second Comment'/>
      </ul>
    </Layout>
  )
}
