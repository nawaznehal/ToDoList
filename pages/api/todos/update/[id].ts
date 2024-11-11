// pages/api/todos/update/[id].ts

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'PUT') {
    try {
      const { title, description, completed } = req.body

      // Check if to-do item exists
      const existingToDo = await prisma.toDoItem.findUnique({
        where: { id: Number(id) },
      })

      if (!existingToDo) {
        return res.status(404).json({ message: 'To-Do item not found' })
      }

      // Update the to-do item
      const updatedToDo = await prisma.toDoItem.update({
        where: { id: Number(id) },
        data: { title, description, completed },
      })

      return res.status(200).json(updatedToDo)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
