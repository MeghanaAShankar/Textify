import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';

class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            password:''
        }
    }

    onChange=(event)=>{
        this.setState({password:event.target.value})
    }
    onSubmit=()=>{
        alert("Password has been successfully changed");
        this.props.getPassword();
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
           style={{width:"90%"}} type="email" name="email" placeholder="Email" value={this.props.email} readOnly/>
        </div>
</div>
<div>
<label style={{marginLeft:4,fontSize: 15}} >New Password:</label>
        <div>
          <input style={{width:"90%"}} type="password" name="newpassword" placeholder="Password"/>
          </div>
          </div>
          <div>
<label style={{marginLeft:4,fontSize: 15}} >Confirm Password:</label>
        <div>
          <input style={{width:"90%"}} type="password" name="confirmpassword" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
          </div>
          </div>
          
         <br/>
         <div className="col-md-12">
<div className="centerAlign">
<input type="submit" value="Change Password"/>
{/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
</div>    
   </div>
        </form>
        </div>
                 </div>  
      </div>

         );
    }
}
 
export default ForgotPassword;