'use client'

import { formSchema } from "@/lib/validators/form";
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { uploadPost } from "@/lib/database/posts";
import { Post } from "@/lib/validators/post";

export const NewPostForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      caption: "",
      img: "",
      domColor: "",
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    // Upload to SQLite database
    const post: Post = {
      title: values.title,
      domColor: values.domColor,
      published: false,
    }
    uploadPost(post, "cln23xx4600002jwdg9a4z92u")
    // Capture image and store as BLOB file
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 grid-rows-5">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl className="rounded min-w-[14rem]">
                <Input placeholder="title.." {...field} />
              </FormControl>
              <FormDescription className="text-right text-xs font-light">2/50</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
              <FormControl className="rounded">
                <Input placeholder="caption.." {...field} type="text" />
              </FormControl>
              <FormDescription className="text-right text-xs font-light">2/50</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl className="rounded">
                <Input
                  placeholder="img.."
                  {...field}
                  type="file"
                  accept=".png, .jpeg, .webp, .svg, .heic"
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dominant Color</FormLabel>
              <FormControl className="rounded">
                <Input
                  placeholder="teal.."
                  {...field}
                  type="text"

                />
              </FormControl>
              <FormDescription className="text-right text-xs font-light">2/25</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-24 rounded">
          Post
        </Button>
      </form>
    </Form>
  )
}