import React from 'react';

const theme = ['light', 'dark'];
const MyTheme = React.createContext(theme[0]);

export const MyThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <MyTheme.Provider value={{ theme, toggleTheme }}>
            {children}
        </MyTheme.Provider>
    );
};

export const userMyTheme = () => {
    return React.useContext(MyTheme);
};