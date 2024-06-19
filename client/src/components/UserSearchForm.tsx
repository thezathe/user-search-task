import { FC, useState, ChangeEvent, FormEvent } from 'react';
import MaskedInput from 'react-text-mask';

import { FormData } from '@/types';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import { validateEmail } from '@/utils/validateEmail';

const UserSearchForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', number: '' });
  const { users, loading, error, fetchUsers } = useFetchUsers();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.number) {
      alert('Both fields are required');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Invalid email address');
      return;
    }

    fetchUsers(formData);
  };

  return (
    <>
      <div className='max-w-md mx-auto mt-10 w-[22rem]'>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-6 rounded-xl shadow'
        >
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-medium leading-6 text-sm'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='number'
              className='block text-gray-700 font-medium leading-6 text-sm'
            >
              Number
            </label>
            <MaskedInput
              mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
              id='number'
              name='number'
              value={formData.number}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-lg duration-300 hover:bg-blue-600'
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Send'}
          </button>
          {error && <p className='text-red-500 mt-4 text-base'>{error}</p>}
        </form>
        {users.length > 0 && (
          <div className='mt-6 bg-white p-6 rounded-xl shadow'>
            <h2 className='text-xl font-bold mb-4'>Results:</h2>
            <ul>
              {users.map((user, index) => (
                <li key={index} className='mb-2'>
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Number:</strong> {user.number}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearchForm;
