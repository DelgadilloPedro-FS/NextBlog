import { Suspense } from 'react'
import  PostList  from '../components/PostList'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostList posts={undefined} />
      </Suspense>
    </section>
  )
}