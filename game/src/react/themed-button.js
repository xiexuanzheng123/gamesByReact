import React from 'react';
import {ThemeContext} from './theme-context';


class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        console.log(props, theme);
        return (
            <div>
                <button 
                    {...props}
                    style={{background: theme.background}}
                >......</button>
            </div>
        )
    }
}
ThemedButton.contextType = ThemeContext;


export default ThemedButton;
