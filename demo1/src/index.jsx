import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    // 验证传入的props
    propTypes : {
        name : React.PropTypes.String.isRequired
    },
    // 设置默认属性值，每个类只调用一次, 只针对那些非必需属性
    getDefaultProps : function(){
        return {
            name : 'hcxowe',
            value : 1234
        };
    },
    // 设置默认属性值，每个实例只调用一次
    getInitialState : function(){
        return {
            visible : false
        };
    },
    // 组件渲染前钩子
    componentWillMount : function(){

    },
    // 渲染
    render : function(){
        return (
            <div style={{color:'red'}}>hello {this.props.children} and {this.props.name} or {this.props.value} && {this.state.visible?'show':'hidden'}</div>
        )
    },
    // 渲染完成钩子
    componentDidMount : function(){

    },
    // props修改时钩子
    componentWillReceiveProps : function(nextProps){

    },
    // 在组件渲染时钩子，return false;会跳过渲染及其前后钩子
    shouldComponentUpdate : function(){

    },
    // 接收到新的prps或者state时的钩子
    compomentWillUpdate : function(){

    },
    // 更新完成钩子
    componentDidUpdate : function(){

    },
    // 卸载销毁钩子
    componentWillUnmount : function(){

    }
});

ReactDOM.render(<Hello name='323232323'>hcxowe</Hello>, document.getElementById('content'));
