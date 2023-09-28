'use client'

import { Post } from '@/lib/validators/post'
import { FC } from 'react'
import { PostCard } from './postCard'

interface feedProps {
  posts: Post[]
}

const feed: FC<feedProps> = ({ posts }) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-extralight">Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default feed