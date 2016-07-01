import React from 'react';

var AnswerRadioInput = React.createClass({
    render : function(){
        return (
            <div className='radio'>
                <label>
                    <input type='radio' checked/>radio
                </label>
            </div>
        );
    }
});

module.exports = AnswerRadioInput;
