'use client'

import { Post } from '@/lib/validators/post'
import { FC, useState } from 'react'
import { PostCard } from './postCard'

interface feedProps {
  posts: Post[]
}

const Feed: FC<feedProps> = ({ posts }) => {
  const [color, setColor] = useState("teal")

  setTimeout(() => {
    setColor("pink")
  }, 500)

  // Side note, think changing site based on posts may be too frequent and chaotic
  // could be much better to do this based on sections instead

  // useInView will return true when post is within viewport
  // We should nest useInView within the child element so they can change the interface when they're
  // in view
  // Can pass a callback function to child components in order to organize behavior since it will be
  // linked across sections and we probably don't want conflicting demands

  // Callback function to hand to children for them to let us know that they're in view
  // TODO: wrap in useCallback
  const colorController = (color: String) => {
    // 
  }

  return (
    <section className={`flex flex-col gap-4`}>
      <h1 className="text-center header">Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} className="h-[30rem]" background="bg-teal-400 bg-opacity-30 backdrop-blur" />
      ))}
    </section>
  );
}

export default Feed