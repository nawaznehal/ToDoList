import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const numericId = parseInt(id as string);

  if (req.method === 'PUT') {
    const { title, completed } = req.body;
    try {
      // Use the correct model name, which is "task"
      const updatedTodo = await prisma.task.update({
        where: { id: numericId },
        data: { title, completed },
      });
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }
}
