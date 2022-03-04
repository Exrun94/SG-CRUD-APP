import React, { createContext, useState } from 'react';

interface ContextType {
    isToggled: boolean;
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}

interface FrameMotionProvider {
    children: React.ReactNode;
};
  
export const FrameMotionContext = createContext({} as ContextType);

export const FrameMotionContextProvider = ({ children }: FrameMotionProvider) => {
    const [isToggled, setIsToggled] = useState(false);
  
    return (
        <FrameMotionContext.Provider value={{ isToggled, setIsToggled }}>
            {children}
        </FrameMotionContext.Provider>
    );
};