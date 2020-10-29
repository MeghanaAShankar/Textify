import React from 'react';
import SendEmail from './SendEmail';
import Recents from './recents';
import Header from './header';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { recents:[], }
  }
  onSend = (recents) => {
    this.setState({ 
      recents: recents
    });
  }
    render() {
      const {email}=this.props;
      return (
          <div style={{marginTop:"20px"}} > 
            <Header email={email}/>
             <div style={{height:200}}>
             <SendEmail email={email} onSend={this.onSend}/>
             </div>
             <Recents recents={this.state.recents}/>
        </div>
      );
    }
  }
export default Home;