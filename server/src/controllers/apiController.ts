import { Request, Response } from 'express';
import data from '../data.json';

let timeoutId: NodeJS.Timeout;

export const searchUsers = (req: Request, res: Response): void => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const { email, number } = req.body;
  const normalizedNumber = number ? number.replace(/-/g, '') : '';

  timeoutId = setTimeout(() => {
    const results = data.filter(
      entry =>
        entry.email === email && (!number || entry.number === normalizedNumber),
    );
    res.json(results);
  }, 5000);
};
