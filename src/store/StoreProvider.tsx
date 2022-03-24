import React, { useEffect, useState } from 'react';
import { produce } from 'immer';
import { StoreProviderType } from './types';

const StoreContext = React.createContext({} as StoreProviderType);

export const useStore = () => React.useContext(StoreContext);

const data = [
  {
    id: 0,
    attributes: {
      title: 'item 01',
      description: 'item 01 --- item 01 --- item 01 --- item 01',
      completed: false,
      date: new Date(0).toISOString(),
    },
  },
  {
    id: 1,
    attributes: {
      title: 'item 02',
      description: 'item 02 --- item 02 --- item 02 --- item 02',
      completed: false,
      date: new Date(0).toISOString(),
    },
  },
  {
    id: 2,
    attributes: {
      title: 'item 03',
      description: 'item 03 --- item 03 --- item 03 --- item 03',
      completed: false,
      date: new Date(0).toISOString(),
    },
  },
];

export const StoreProvider: React.FC = ({ children }) => {
  const [store, setStore] = useState({} as StoreProviderType);

  useEffect(() => {
    console.info('- - - start: StoreProvider');
    setStore(
      produce(draft => {
        draft.tasks = data;
      })
    );
  }, []);

  const value = {
    ...store,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
