
import z from "zod"

export const formSchema = z.object({
  title: z.string().min(2).max(50),
  caption: z.string().min(2).max(150),
  img: z.string(),
  domColor: z.string().min(2).max(25)
})