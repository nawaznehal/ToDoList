// pages/api/todos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all tasks
    try {
      const tasks = await prisma.task.findMany();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  if (req.method === 'POST') {
    // Create a new task
    const { title } = req.body;
    try {
      const newTask = await prisma.task.create({
        data: {
          title,
        },
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }

  if (req.method === 'PUT') {
    // Update an existing task
    const { id, title, completed } = req.body;
    try {
      const updatedTask = await prisma.task.update({
        where: { id },
        data: {
          title,
          completed,
        },
      });
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }

  if (req.method === 'DELETE') {
    // Delete a task
    const { id } = req.body;
    try {
      await prisma.task.delete({
        where: { id },
      });
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}
