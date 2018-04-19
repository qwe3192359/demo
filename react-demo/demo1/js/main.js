/**
 * Created by yy on 2018/4/19.
 */
//将模板转为 HTML 语言，并插入指定的 DOM 节点
{
    ReactDOM.render(
        <h1>插入dom</h1>,
        document.getElementById('example')
    )
}

//JSX语法
{
    let arr = [
        <h1>123</h1>,
        <h2>456</h2>
    ];
    ReactDOM.render(
        <div>
            {
                arr.map(function (name, i) {
                    return <div key={i}>{name}</div>
                })
            }
            {arr}
        </div>,
        document.getElementById('example2')
    );
}

//组件
//组件第一个字母需大写，组件内只能包含一个顶层标签
//添加组件属性,class 属性需要写成 className ，for 属性需要写成 htmlFor
//组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
{
    let Hello = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired,
        },
        render() {
            return <div className="" htmlFor="">
                <p>姓名：{this.props.name},</p>
                <p>年龄：{this.props.age}</p>
            </div>
        }
    });
    ReactDOM.render(
        <Hello name="期望" age="20" />,
        document.getElementById('example3')
    );
}

//组件,this.props.children 属性,它表示组件的所有子节点
{
    let HelloList = React.createClass({
        render(){
            return (
                <div>{this.props.children}

                    {
                        this.props.children.map(function (name, i) {
                            return <p key={i}>{name}</p>
                        })
                    }

                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }

                </div>
            )
        }
    });
    ReactDOM.render(
        <HelloList>
            <span>hello</span>
            <span>world</span>
        </HelloList>,
        document.getElementById('example4')
    );
}

//获取真实DOM节点ref属性
{
    let MyComponent = React.createClass({
        handleClick: function() {
            this.refs.myTextInput.focus();
        },
        render: function() {
            return (
                <div>
                    <input type="text" ref="myTextInput" />
                    <input type="button" value="Focus the text input" onClick={this.handleClick} />
                </div>
            );
        }
    });

    ReactDOM.render(
        <MyComponent />,
        document.getElementById('example5')
    );
}

//this.state，状态改变
{
    let LikeButton = React.createClass({
        //定义初始状态，通过this.state读取
        getInitialState() {
            return {liked: false};
        },
        //定义事件
        handleClick(event) {
            //this.setState修改状态值
            this.setState({liked: !this.state.liked});
        },
        render() {
            let text = this.state.liked ? 'like' : 'haven\'t liked';
            return (
                <p onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </p>
            );
        }
    });
    ReactDOM.render(
        <LikeButton />,
        document.getElementById('example6')
    );
}

//表单
{
    let Input = React.createClass({
        getInitialState(){
            return {value: 'hello'}
        },
        handleChange(e){
            this.setState({value:e.target.value})
        },
        render(){
            let value = this.state.value;
            return (
                <div>
                    <input type="text" value={value} onChange={this.handleChange} />
                    <p>{value}</p>
                </div>
            )
        }
    });
    ReactDOM.render(<Input/>, document.getElementById('example7'));
}