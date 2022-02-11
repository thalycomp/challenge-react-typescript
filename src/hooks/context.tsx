import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { AppGlobalProps, IPosts, IProviderProps, IUsers } from '../types';

const useAppGlobalContext = createContext({} as AppGlobalProps);

export const AppProvider = ({ children }: IProviderProps) => {
  const [users, setUsers] = useState<IUsers[] | []>([]);
  const [posts, setPosts] = useState<IPosts[] | []>([]);

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

  async function getPosts(userId: number) {
    try {
      const { data } = await api.get(`/posts/${userId}`);
      console.log(data);
      setPosts(data);
    } catch (err) {}
  }

  return (
    <useAppGlobalContext.Provider
      value={{
        users,
        getPosts,
        posts,
      }}
    >
      {children}
    </useAppGlobalContext.Provider>
  );
};

export function useGlobalContext(): AppGlobalProps {
  return useContext(useAppGlobalContext);
}
