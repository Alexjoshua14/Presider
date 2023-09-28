
import { NewPostForm } from "@/components/new-post"

export default function Post() {

  return (
    <main className="flex-1 w-full h-full flex center">
      <section className="p-4 flex flex-col gap-12">
        <h1 className="header">
          Post Something
        </h1>
        <NewPostForm />
      </section>
    </main>

  )
}