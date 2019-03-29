import {ThemeContext} from './theme-context';
import React from 'react';

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>

            {
                ({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{background: theme.background}}
                        >
                        
                        Toggle
                    </button>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton;