import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      // Use the correct model name "task" instead of "toDoItem"
      const deletedToDo = await prisma.task.delete({
        where: { id: Number(id) }, // Ensure id is a number
      });
      res.status(200).json(deletedToDo); // Return the deleted task
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
