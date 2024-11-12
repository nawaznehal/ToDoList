import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (req.method === 'GET') {
    try {
      // Use the correct model name "task" instead of "toDoItem"
      const toDoItems = await prisma.task.findMany({
        where: {
          title: {
            contains: String(query),  // This is case-insensitive
            mode: 'insensitive',
          },
        },
      });
      return res.status(200).json(toDoItems);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to search to-do items' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
