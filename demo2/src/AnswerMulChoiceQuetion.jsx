import React from 'react';
import AnswerRadioInput from './AnswerRadioInput.jsx';

var AnswerMulChoiceQuetion = React.createClass({
    render : function(){
        return (
            <div className='from-ground'>
                <label className='survey-item-label'>dddddd</label>
                <div className='sruvey-item-content'>
                    <AnswerRadioInput />
                </div>
            </div>
        );
    }
});

module.exports = AnswerMulChoiceQuetion;
