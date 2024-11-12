// pages/api/todos/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const numericId = Number(id); // Ensure we are getting a valid number

  if (isNaN(numericId)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  if (req.method === 'PUT') {
    const { title, completed } = req.body;

    try {
      const updatedTodo = await prisma.toDoItem.update({
        where: { id: numericId },
        data: { title, completed },
      });

      return res.status(200).json(updatedTodo);
    } catch (error) {
      console.error('Error updating to-do:', error);
      return res.status(500).json({ message: 'Error updating to-do item' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.toDoItem.delete({
        where: { id: numericId },
      });

      return res.status(200).json({ message: 'To-Do item deleted successfully' });
    } catch (error) {
      console.error('Error deleting to-do:', error);
      return res.status(500).json({ message: 'Error deleting to-do item' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
