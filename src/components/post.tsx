'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Post = ({ post }: { post: { title: string, domColor: string } }) => {

  return (
    <Card>
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