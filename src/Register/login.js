import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//parent component
export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
        };
      }
    
    onSubmit = () => {
      this.props.onUsernameChange(this.state.email);
    };

      myChange = event => {
        this.setState({ email: event.target.value });
        this.props.getEmail( event.target.value);
      }
  
      selectValue = event => {
        this.setState({ password: event.target.value });
      }
     
    render() {
        return ( 
            <div style={{width:"100%"}}>
            <h1 style={{color:"black",marginTop:50}}>Textify</h1>
            <div className="col-md-12" style={{width:"100%",height:"100%",marginTop:-20,display:"flex"}}>
                <div className="col-md-6" id="leftPanel"style={{float:"left",width:"50%",backgroundColor:"rgb(115, 120, 124)",marginLeft:"200"}}></div>
                <div className="col-md-6" id="rightPanel"style={{float:"right",width:"50%",backgroundColor:"rgb(133, 126, 148)"}}>
        <form onSubmit={this.onSubmit}>
            <div>
        <label style={{marginLeft:3,fontSize:15}} >Email:</label>
        <div className="col-md-4" >
          <input
           style={{width:"90%"}} type="email" name="email" placeholder="Email" value={this.props.email} onChange={this.myChange}/>
</div>
</div>
<div>
<label style={{marginLeft:4,fontSize: 15}} >Password:</label>
        <div>
          <input style={{width:"90%"}} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.selectValue}/>
          </div>
          </div>
         <br/>
         <div className="col-md-12">
        <input style={{float:"left",marginLeft:5}} type="checkbox"/> <label  style={{float:"left",marginRight:150,fontSize:15}} > Remember Me!</label> 
          <div style={{float:"right",marginRight:10,marginTop:-20}}> <ul><li  style={{float:"left",marginLeft:400,fontSize:15,marginTop:-20}}> <Link to="/forgotPassword"> I forgot my password</Link></li></ul></div>
<div className="centerAlign">
<input type="submit" value="Login To Textify"/>
</div>    
   </div>
        </form>
        </div>
        <div>  
                 </div>  
                 </div>  
                 <div className="centerAlign" >
                         <b style={{height:20,color:"black"}}>New to Textify?</b>
                         </div>
                         <div className="centerAlign">
                         <Link to="/SignUp">Sign-up Here</Link>    It only takes 30 seconds
                </div>
      </div>
         );
    }
}
