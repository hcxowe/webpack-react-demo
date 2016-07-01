var React = require("react");
var AnswerRadioInput = require("./AnswerRadioInput");

var AnswerMulChoiceQuetion = React.createClass({
    propTypes : {
        value : React.PropTypes.string,
        choices : React.PropTypes.array.isRequired
        //onCompleted : React.PropTypes.func.isRequired
    },
    getInitialState : function(){
        return {
            //id : uniquiId('multiple-choice-'),
            value : this.props.value
        };
    },
    handleChange : function(value){
        this.setState({value : value});
        this.props.onCompleted(value);
    },
    renderChoice : function(){
        return this.props.choices.map(function(choice, i){
            return AnswerRadioInput({
                id : 'choice-' + i,
                name : this.state.id,
                label : choice,
                value : choice,
                checked : this.state.value === choice
                //onChanged : this.handleChange
            });
        }.bind(this));
    },
    render : function(){
        return (
            <div className='from-ground'>
                <label className='survey-item-label' htmlFor={this.state.id}>{this.props.label}</label>
                <div className='sruvey-item-content'>
                    {this.renderChoice()}
                </div>
            </div>
        );
    }
});

module.exports = AnswerMulChoiceQuetion;
