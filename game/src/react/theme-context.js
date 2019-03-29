import React from 'react';


export const themes = {
    light: {
        foreground: 'q',
        background: '#eeeeee'
    },
    dark: {
        foreground: 'z',
        background: '#999'
    }
};

export const ThemeContext = React.createContext({theme:themes.dark, toggleTheme: () => {}});