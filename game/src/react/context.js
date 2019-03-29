import React from 'react';

const ThemeContext = React.createContext('dark1');

class App extends React.Component {
    render() {
        return (
            // <ThemeContext.Provider>
            //     <Toolbar />
            // </ThemeContext.Provider>
            <Toolbar />
        )
    }
}
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
   
    
    static contextType = ThemeContext;
    render() { 
        return (
            <button theme={this.context} >{this.context}</button>
        )
    }
}

export default App;