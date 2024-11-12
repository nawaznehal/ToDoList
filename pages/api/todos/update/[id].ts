import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { title, completed } = req.body;

  if (req.method === 'PUT') {
    try {
      // Use the correct model name "task" instead of "toDoItem"
      const existingToDo = await prisma.task.findUnique({
        where: { id: Number(id) },
      });

      if (!existingToDo) {
        return res.status(404).json({ error: 'To-Do item not found' });
      }

      const updatedToDo = await prisma.task.update({
        where: { id: Number(id) },
        data: {
          title,
          completed,
        },
      });

      return res.status(200).json(updatedToDo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update to-do item' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
