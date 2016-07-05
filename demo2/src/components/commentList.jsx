import React from 'react';
import Comment from './comment'

var CommentList = React.createClass({
    render : function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className='commentList'>
                {commentNodes}
            </div>
        );
    }
});

export default CommentList;
