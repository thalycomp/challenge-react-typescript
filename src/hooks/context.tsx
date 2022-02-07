import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { AppGlobalProps, IProviderProps, IUsers } from '../types';

const useAppGlobalContext = createContext({} as AppGlobalProps);

export const AppProvider = ({ children }: IProviderProps) => {
  const [users, setUsers] = useState<IUsers[] | []>([]);

  useEffect(() => {
    async function fetchUsers() {
      await getUsers();
    }
    fetchUsers();
  }, []);

  async function getUsers() {
    try {
      const { data } = await api.get('users');

      setUsers(data);
    } catch (err) {}
  }

  return (
    <useAppGlobalContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </useAppGlobalContext.Provider>
  );
};

export function useGlobalContext(): AppGlobalProps {
  return useContext(useAppGlobalContext);
}
