import { useState } from 'react';
import axios from 'axios';

import { FormData, User, UseFetchUsersResult } from '@/types';
import useAbortController from '@/hooks/useAbortController';

export const useFetchUsers = (): UseFetchUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortController = useAbortController();

  const fetchUsers = async (formData: FormData) => {
    const controller = abortController();

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('/api/search', formData, {
        signal: controller.signal,
      });

      if (response.data.length === 0) {
        setError('No data found');
      } else {
        setUsers(response.data);
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      } else {
        setError('Error fetching data');
      }
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, error, fetchUsers };
};
