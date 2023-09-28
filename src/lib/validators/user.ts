
import { z } from 'zod'
import { PostSchema } from './post'

export const UserSchema = z.object({
  id: z.string().cuid().optional(),
  email: z.string().email(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>