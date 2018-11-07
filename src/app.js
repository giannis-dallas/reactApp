class HelloApp extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      status:'test'
    }
  }

  render(){
  return(
    <div className="react-app">
    <HelloMessage message="Hey everybody"/>
    </div>
  )
  }

}

const HelloMessage = props => 
    <h2>{props.message}</h2>

  ReactDOM.render(
    < HelloApp />,
    document.getElementById('reactApp')
  );
