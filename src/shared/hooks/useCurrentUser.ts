import {useState, useEffect} from 'react';
import {storage} from '../utils/storage';
import {User} from '../types/User';

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userString = storage.getString('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  return user;
}
