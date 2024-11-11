// pages/api/todos/index.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Define the handler for fetching to-do items
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all to-do items from the database
      const toDoItems = await prisma.toDoItem.findMany()

      // Return the to-do items as the response
      return res.status(200).json(toDoItems)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    // Handle any non-GET requests
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
