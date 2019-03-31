import React from 'react';

class App extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <Columns />
                </tr>
                </tbody>
            </table>
        )
    }
}

function Columns() {
    return (
        <React.Fragment>
            <td>1</td>
            <td>2</td>
        </React.Fragment>
    )
}
export default App;