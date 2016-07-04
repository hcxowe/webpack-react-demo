import React from 'react';

var CommentForm = React.createClass({
    getInitialState : function(){
        return {
            author: "",
            text: ""
        };
    },
    handleSubmit : function(e){
        e.preventDefault();

        // var author1 = this.refs.author.().value.trim();
        // var text1   = this.refs.text.getDOMNode().value.trim();
        // if(!text1 || !author1){
        //     return;
        // }

        this.props.onCommentSubmit({author:this.state.author, text:this.state.text});

        this.refs.author.value = "";
        this.refs.text.value = "";
        return;
    },
    handleAuthorChange : function(e){
        this.state.author = e.target.value;
        this.setState(this.state);
    },
    handleTextChange : function(e){
        this.state.text = e.target.value;
        this.setState(this.state);
    },
    render : function(){
        return (
            <form className='commentForm' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='your name' ref='author' onChange={this.handleAuthorChange}/>
                <input type='text' ref='text' placeholder='say something...'  onChange={this.handleTextChange}/>
                <input type='submit' value='POST' />
            </form>
        );
    }
});

export default CommentForm;
