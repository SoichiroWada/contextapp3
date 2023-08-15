import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { HeadlineContext } from '../contexts/HeadlineContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    const { headline, handleClick } = useContext(HeadlineContext);

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1 id="navh1" onClick={handleClick}>{headline}</h1>
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