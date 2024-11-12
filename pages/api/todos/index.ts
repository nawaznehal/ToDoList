import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Use the correct model name "task" instead of "toDoItem"
      const todos = await prisma.task.findMany(); // Fetch to-do items
      return res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch to-do items' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
