import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/commentBox';

let data = [
    {author:'hcxowe', text:'this is first comment'},
    {author:'hcxowe', text:'this is second comment'}
];

ReactDOM.render(<CommentBox data={data}/>, document.getElementById('content'));
