import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider ( props ) {
    const [ isLightTheme, setIsLightTheme ] = useState( true )
    const light = { syntax: '#555', ui: '#ddd', bg:'#eee' }
    const dark = { syntax: '#ddd', ui: '#333', bg:'#555' }

    let toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme, }}>
            { props.children }
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;