import React, { useEffect, useState } from 'react';
import { produce } from 'immer';
import { TaskService } from '../graphql/services';
import { StoreProviderType } from './types';

const StoreContext = React.createContext({} as StoreProviderType);

export const useStore = () => React.useContext(StoreContext);

export const StoreProvider: React.FC = ({ children }) => {
  const [store, setStore] = useState({} as StoreProviderType);

  useEffect(() => {
    console.info('- - - start: StoreProvider');
    TaskService.load().then(data => {
      setStore(
        produce(draft => {
          draft.tasks = data;
        })
      );
    });
  }, []);

  const value = {
    ...store,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
