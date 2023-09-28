'use client'

import { FC } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post } from '@/lib/validators/post'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: Post,
  className?: String
}


export const PostCard: FC<PostCardProps> = ({ post, className, ...props }) => {

  return (
    <Card className={cn('rounded', className)} {...props}>
      <CardHeader>
        <CardTitle>
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content here</p>
      </CardContent>
      <CardFooter>
        <p>{post.domColor}</p>
      </CardFooter>
    </Card>
  )
}