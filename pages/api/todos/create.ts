// pages/api/todos/create.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Define the handler for creating a new to-do
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title } = req.body

      // Check if title is provided
      if (!title) {
        return res.status(400).json({ message: 'Title is required' })
      }

      // Create a new to-do item in the database
      const newToDo = await prisma.toDoItem.create({
        data: {
          title,
        },
      })

      // Return the created to-do item as the response
      return res.status(201).json(newToDo)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    // Handle any non-POST requests
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
