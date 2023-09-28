
import { z } from 'zod'
import { UserSchema } from './user'
import { ImageSchema } from './image'

export const PostSchema = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  domColor: z.string(),
  published: z.boolean(),
})

export type Post = z.infer<typeof PostSchema>