// pages/api/todos/delete/[id].ts

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      // Check if the to-do item exists
      const toDoItem = await prisma.toDoItem.findUnique({
        where: { id: Number(id) },
      })

      if (!toDoItem) {
        return res.status(404).json({ message: 'To-Do item not found' })
      }

      // Delete the to-do item
      await prisma.toDoItem.delete({
        where: { id: Number(id) },
      })

      // Return a success message
      return res.status(200).json({ message: 'To-Do item deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
