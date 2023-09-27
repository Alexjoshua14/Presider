import Image from 'next/image'

export default function Home() {


  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <section className="flex flex-col flex-1 gap-2">
        <h1 className="text-3xl">{`Welcome to Presider`}</h1>
        <p className="font-extralight">{`A site where the featured content affects everything`}</p>
      </section>
    </main>
  )
}
