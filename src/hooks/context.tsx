import React, { createContext, useContext, useState } from 'react';
import { AppGlobalProps, IProviderProps, IUsers } from '../types';

const useAppGlobalContext = createContext({} as AppGlobalProps);

export const AppProvider = ({ children }: IProviderProps) => {
  const [users, setUsers] = useState<IUsers[] | []>([]);

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
