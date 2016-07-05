import React from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';

var CommentBox = React.createClass({
    getInitialState : function(){
        return {
            data : []
        };
    },
    componentDidMount: function() {
        this.setState({data :[
            {author:'hcxowe1', text:'this is first comment'},
            {author:'hcxowe2', text:'this is second comment'}
        ]});
    },
    handleCommentSubmit : function(data){
        console.log(data);
        this.state.data.push(data);
        this.setState({data:this.state.data});
    },
    render : function(){
        return (
            <div className='commentBox'>
                <h1>Comment</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

export default CommentBox;
