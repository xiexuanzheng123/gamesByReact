import React from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color={'red'}>
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p>
                Thank you for
            </p>
        </FancyBorder>
        
    )
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function App() {
    return (
        <SplitPane left={<Contacts />} right={<Chat />} />
    )
}
export default WelcomeDialog;