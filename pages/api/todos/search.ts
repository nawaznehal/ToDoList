// pages/api/todos/search.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query

  if (req.method === 'GET') {
    try {
      const toDoItems = await prisma.toDoItem.findMany({
        where: {
          title: {
            contains: String(query),  // This is case-insensitive
            mode: 'insensitive',       // Ensures case insensitivity
          },
        },
      })

      if (toDoItems.length === 0) {
        return res.status(404).json({ message: 'No to-do items found' })
      }

      return res.status(200).json(toDoItems)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
