import React, { createContext, useState } from 'react';


interface ContextType {
    onCreatePermission: boolean;
    setOnCreatePermission: React.Dispatch<React.SetStateAction<boolean>>
    onReadPermission: boolean;
    setOnReadPermission: React.Dispatch<React.SetStateAction<boolean>>
    onUpdatePermission: boolean;
    setOnUpdatePermission: React.Dispatch<React.SetStateAction<boolean>>
    onDeletePermission: boolean;
    setOnDeletePermission: React.Dispatch<React.SetStateAction<boolean>>
}

interface ProductProvider {
    children: React.ReactNode;
};
  
export const PermissionsContext = createContext({} as ContextType);

export const PermissionsContextProvider = ({ children }: ProductProvider) => {
    const [onCreatePermission, setOnCreatePermission] = useState(false);
    const [onReadPermission, setOnReadPermission] = useState(false);
    const [onUpdatePermission, setOnUpdatePermission] = useState(false);
    const [onDeletePermission, setOnDeletePermission] = useState(false);
  
    return (
        <PermissionsContext.Provider value={{ 
            onCreatePermission,
            setOnCreatePermission,
            onReadPermission,
            setOnReadPermission,
            onUpdatePermission,
            setOnUpdatePermission,
            onDeletePermission,
            setOnDeletePermission
            }}>
            {children}
        </PermissionsContext.Provider>
    );
};