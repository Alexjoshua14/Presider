
import { z } from 'zod'
import { PostSchema } from './post'

export const ImageSchema = z.object({
  id: z.string().cuid().optional(),
  postID: z.string().cuid().optional(),
  img: z.unknown(),
  height: z.number(),
  width: z.number(),
  alt: z.string(),
  domColor: z.string(),
})

export type Image = z.infer<typeof ImageSchema>