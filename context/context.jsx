import { createContext, useContext, useState, useEffect } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './reducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize = () => setScreenWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  });

  return (
    <AppContext.Provider value={{ state, dispatch, screenWidth }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
