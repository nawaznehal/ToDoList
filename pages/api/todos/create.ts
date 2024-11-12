import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title } = req.body;
    try {
      // Use the correct model name "task" instead of "toDoItem"
      const newToDo = await prisma.task.create({
        data: {
          title,
        },
      });
      res.status(201).json(newToDo); // Return the created task
    } catch (error) {
      res.status(500).json({ error: 'Failed to create new task' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
