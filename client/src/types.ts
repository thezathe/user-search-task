export interface FormData {
  email: string;
  number: string;
}

export interface User {
  email: string;
  number: string;
}

export interface UseFetchUsersResult {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: (formData: FormData) => Promise<void>;
}
