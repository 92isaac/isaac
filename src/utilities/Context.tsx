/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext, useContext, ReactNode } from "react";

interface GlobalData {
  checked: boolean;
  handleChange: (nextChecked: boolean) => void;
}

export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };


  const globalData: GlobalData = {
    checked,
    handleChange,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalUseContext = () => {
  return useContext(AppContext);
};
