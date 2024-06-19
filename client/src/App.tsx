import { FC } from 'react';
import UserSearchForm from '@/components/UserSearchForm';

const App: FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <UserSearchForm />
    </div>
  );
};

export default App;
