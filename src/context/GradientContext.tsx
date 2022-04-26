import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string;
}


interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (mainPrevColors: ImageColors) => void;
    setPrevMainColors: (mainPrevColors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); // TODO: definir tipo

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'black',
        secondary: 'orange',
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (mainColors: ImageColors) => {
        setColors(mainColors);
    };

    const setPrevMainColors = (mainPrevColors: ImageColors) => {
        setPrevColors(mainPrevColors);
    };

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }} >
            {children}
        </GradientContext.Provider>
    );
};
