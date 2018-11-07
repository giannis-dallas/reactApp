class HelloApp extends React.Component {
  constructor(props) {
    super(props), this.state = {
      status: 'test'
    };
  }

  render() {
    return React.createElement("div", {
      className: "react-app"
    }, React.createElement(HelloMessage, {
      message: "Hey everybody"
    }));
  }

}

const HelloMessage = props => React.createElement("h2", null, props.message);

ReactDOM.render(React.createElement(HelloApp, null), document.getElementById('reactApp'));