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

export const NewPostForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      caption: "",
      img: "",
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    // Upload to SQLite database

    // Capture image and store as BLOB file
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl className="rounded min-w-[14rem]">
                <Input placeholder="title.." {...field} />
              </FormControl>
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
                <Input placeholder="caption.." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
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
        <Button type="submit" className="w-24 rounded">
          Post
        </Button>
      </form>
    </Form>
  )
}