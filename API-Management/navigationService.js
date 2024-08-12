import { createRef } from 'react';

export const navigationRef = createRef();

export function navigate(name, params) {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name, params);
  };
};
