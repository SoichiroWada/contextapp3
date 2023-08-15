import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <button onClick={ toggleAuth } id="toggleAuth">
                { isAuthenticated ? 'LOGOUT' : 'LOGIN' }
            </button>
            <div>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
            </div>            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>        
    );
}
 
export default Navbar;