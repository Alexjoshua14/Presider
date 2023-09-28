
import { useTheme } from 'next-themes'

import Feed from '@/components/feed';
import { getAllPosts } from '@/lib/database/posts';

export default async function Home() {
  // const { setTheme, theme } = useTheme();


  // const changeTheme = () => {
  //   setTheme("dark");
  //   setTimeout(() => {
  //     setTheme("light")
  //   }, 5000);
  // }

  let posts = await getAllPosts();



  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <section className="flex flex-col flex-1 gap-2">
        <h1 className="text-3xl">{`Welcome to Presider`}</h1>
        <p className="font-extralight">{`A site where the featured content affects everything`}</p>
        {/* <button onClick={changeTheme}>Some Darkness</button> */}
        <Feed posts={posts} />
      </section>
    </main>
  )
}
