import React from 'react';
import ReactDOM from 'react-dom';
import AnswerMulChoiceQuetion from './AnswerMulChoiceQuetion';

var choices = ['question1', 'question2', 'question3', 'question4'];
ReactDOM.render(<AnswerMulChoiceQuetion choices={choices}/>, document.getElementById('content'));
