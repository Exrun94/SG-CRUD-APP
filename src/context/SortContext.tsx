import React, { createContext, useState } from "react";

interface ContextType {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

interface SortProvider {
  children: React.ReactNode;
}

export const SortContext = createContext({} as ContextType);

export const SortContextProvider = ({ children }: SortProvider) => {
  const [sortBy, setSortBy] = useState("name");

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
