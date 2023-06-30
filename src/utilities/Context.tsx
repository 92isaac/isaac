/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, createContext, useContext, ReactNode } from "react";

interface GlobalData {
  checked: boolean;
  divRef: any;
  handleChange: (nextChecked: boolean) => void;
  handleClick:()=> void;
}

export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [checked, setChecked] = useState(true);
  const divRef = useRef<HTMLDivElement | null>(null);


  const handleClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = () => {
    setChecked(!checked);
  };


  const globalData: GlobalData = {
    checked,
    divRef,
    handleChange,
    handleClick,
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
