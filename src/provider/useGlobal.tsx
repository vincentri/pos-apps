import React, {createContext, useContext, useMemo, useState} from 'react';

interface GlobalContextI {
  reRenderNavigation: boolean;
  setReRenderNavigation: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextI | undefined>(undefined);

export const GlobalProvider = (props: any) => {
  const [reRenderNavigation, setReRenderNavigation] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      reRenderNavigation,
      setReRenderNavigation,
    }),
    [reRenderNavigation, setReRenderNavigation],
  );

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(`${useGlobal.name} must be within ${GlobalProvider.name}`);
  }
  return context;
};
