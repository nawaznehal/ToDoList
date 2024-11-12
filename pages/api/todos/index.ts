// pages/api/todos/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const todos = await prisma.toDoItem.findMany(); // Fetch to-do items
      return res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to fetch to-do items' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title } = req.body;

      if (!title) {
        return res.status(400).json({ message: 'Title is required' });
      }

      const newTodo = await prisma.toDoItem.create({
        data: {
          title,
        },
      });

      return res.status(201).json(newTodo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating to-do item' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
