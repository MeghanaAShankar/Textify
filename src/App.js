import React, { Component } from 'react';
import './App.css';
import Login from './Register/login';
import SignUp from './Register/signUp';
import { Switch,Route,Redirect} from "react-router-dom";
import Home from './Register/home';
import ForgotPassword from './Register/forgotPassword';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', redirect: false,redirectToLogin: false}
  }
  setRedirect = () => {
    this.setState({ redirect: true });
  }
  //fetch email from login.js to home.js
  onUsernameChange = (email) => {
    this.setState({ 
      email: email
    });
    this.setRedirect();
  }

  //send email on click of forgot password
  getEmail = (email) => {
    this.setState({ 
      email: email
    });
  }

//from forgotpassword.js to login.js
  getPassword=()=>{
    this.setState({
      redirectToLogin:true
    });
  }
  render(){
  return (
    <div className="App">
       {this.state.redirect ? <Redirect to="/home"/>:null}
       {this.state.redirectToLogin ? <Redirect to="/"/>:null}

        <Switch>
        <Route path="/forgotPassword"> <ForgotPassword email={this.state.email} getPassword={this.getPassword}/></Route>
        <Route  path="/SignUp"> <SignUp/> </Route>
        <Route  path="/home"> <Home email={this.state.email}/> </Route>
        <Route  to="/" ><Login onUsernameChange={this.onUsernameChange} password={this.state.password}email={this.state.email} getEmail={this.getEmail} /></Route>
        </Switch>
    </div>
  );
}
}

export default App;
