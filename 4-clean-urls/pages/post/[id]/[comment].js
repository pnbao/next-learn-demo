import { useRouter } from 'next/router'
import Layout from '../../../components/MyLayout'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return (
    <>
      <Layout>
      <h1>{id}</h1>
      <p>Comment: {comment}</p>
      </Layout>
    </>
  )
}

export default Comment
