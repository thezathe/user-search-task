import { Request, Response } from 'express';
import data from '../data.json';

let timeoutId: NodeJS.Timeout | null = null;

export const searchUsers = (req: Request, res: Response): void => {
  // Clear any existing timeout to avoid multiple pending requests
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  // Destructure request body
  const { email, number } = req.body;

  // Normalize number by removing dashes
  const normalizedNumber = number ? number.replace(/-/g, '') : '';

  // Simulate delayed response with setTimeout
  timeoutId = setTimeout(() => {
    // Filter data based on email and optionally normalized number
    const results = data.filter(entry => {
      const matchesEmail = entry.email === email;
      const matchesNumber = !number || entry.number === normalizedNumber;
      return matchesEmail && matchesNumber;
    });

    // Send filtered results as JSON response
    res.json(results);
  }, 5000);
};
