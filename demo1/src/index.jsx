import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    render : function(){
        return (
            <div>hello hcxowe!</div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('content'));
