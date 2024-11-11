import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (req.method === 'PUT') {
    // Toggle completion status
    const { title, completed } = req.body;
    
    try {
      const updatedTodo = await prisma.toDoItem.update({
        where: { id: Number(id) },
        data: { title, completed },
      });
      
      return res.status(200).json(updatedTodo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating to-do item' });
    }
  } else if (req.method === 'DELETE') {
    // Delete to-do
    try {
      await prisma.toDoItem.delete({
        where: { id: Number(id) },
      });

      return res.status(200).json({ message: 'To-Do item deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting to-do item' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
