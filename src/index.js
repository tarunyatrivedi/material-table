import React from "react";
var ReactDOM = require('react-dom');
import TelemonConfig from './table';
class App extends React.Component {
    render() {
        return (
                <div>
                   <TelemonConfig />
                </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));





