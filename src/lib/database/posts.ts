'use server'

import { prisma } from "@/lib/prisma"

export const getUser = async (id: string) => {
  const res = await prisma.user.findUnique({
    where: {
      id
    }
  })
}

export const getAllUsers = async () => {
  const res = await prisma.user.findMany();
  
  return res;
}

export const getAllPosts = async () => {
  const res = await prisma.post.findMany();

  return res;
}

export const getImage = async (id: string) => {
  const res = await prisma.image.findUnique({
    where: {
      id
    }
  })
}