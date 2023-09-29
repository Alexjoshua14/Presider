'use client'

import { FC, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post } from '@/lib/validators/post'
import { cn } from '@/lib/utils'
import { container, section, section_1, section_2, section_3 } from '@/lib/variants/cardVariants'
import { useContainer } from '@/lib/hooks/useContainer'

interface PostCardProps {
  post: Post,
  className?: String,
  background?: String,
}


export const PostCard: FC<PostCardProps> = ({ post, className, background, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .6 });

  const { showContainer } = useContainer(isInView);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      ref={ref}
    >
      <Card className={cn(`${showContainer ? "" : "shadow-none"} rounded bg-transparent border-0 flex flex-col`, className)} {...props}
        style={{ transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s" }}
      >
        <motion.div className={cn("rounded-t", background)}
          transition={{ duration: 0.6 }}
          variants={section}
        >
          <CardHeader>
            <CardTitle>
              {post.title}
            </CardTitle>
          </CardHeader>
        </motion.div>
        <motion.div
          className={cn("flex-1", background)}
          transition={{ duration: 0.6 }}
          variants={section}
        >
          <CardContent>
            <p>Content here</p>
          </CardContent>
        </motion.div>
        <motion.div
          className={cn("rounded-b", background)}
          transition={{ duration: 0.6 }}
          // style={{ transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0s" }}
          variants={section}
        >
          <CardFooter>
            <p>{post.domColor}</p>
          </CardFooter>
        </motion.div>
      </Card>
    </motion.div>
  )
}