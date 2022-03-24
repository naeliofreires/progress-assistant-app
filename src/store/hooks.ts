import React from 'react';

import { StoreContext } from './StoreProvider';

export const useStore = () => React.useContext(StoreContext);

export const useActions = () => useStore().actions;
