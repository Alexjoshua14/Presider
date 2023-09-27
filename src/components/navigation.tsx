'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'

const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Post",
    link: "/post"
  },
  {
    id: 3,
    title: "Home Again",
    link: "/"
  },

]

export default function Navigation() {
  return (
    <NavigationMenu className={`relative flex w-full bg-secondary`}>
      <NavigationMenuList className={`flex px-4 py-4 gap-8`}>
        {navItems.map(item => (
          <NavigationMenuItem key={item.id}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded")}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

