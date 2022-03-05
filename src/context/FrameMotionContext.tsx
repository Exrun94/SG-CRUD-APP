import React, { createContext, useState } from 'react';

interface UpdateData {
    id: string;
    productName: string;
    price: number;
    currency: string;
}

interface ContextType {
    isCreate: boolean;
    setIsCreate: React.Dispatch<React.SetStateAction<boolean>>
    isUpdate: boolean;
    setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>
    updateData: UpdateData;
    setUpdateData: React.Dispatch<React.SetStateAction<UpdateData>>

}

interface FrameMotionProvider {
    children: React.ReactNode;
};
  
export const FrameMotionContext = createContext({} as ContextType);

export const FrameMotionContextProvider = ({ children }: FrameMotionProvider) => {
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateData, setUpdateData] = useState<UpdateData>({} as UpdateData);
  
    return (
        <FrameMotionContext.Provider value={{ isCreate, setIsCreate, isUpdate, setIsUpdate, updateData, setUpdateData }}>
            {children}
        </FrameMotionContext.Provider>
    );
};