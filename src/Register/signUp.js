import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import history from './../history';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
        };
       // this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    render() {
        return ( 
            <div style={{width:"100%"}}>
            <h1 style={{color:"black",marginTop:90}}>Textify</h1>
            <div className="col-md-12" style={{width:"100%",height:"70%",marginTop:-20,display:"flex"}}>
                <div className="col-md-6" id="leftPanel"style={{float:"left",width:"50%",backgroundColor:"rgb(115, 120, 124)",marginLeft:"200"}}></div>
                <div className="col-md-6" id="rightPanel"style={{float:"right",width:"50%",backgroundColor:"rgb(133, 126, 148)"}}>
        <form style={{marginTop:21}} >
            <div>
        <div className="col-md-2" >
        <label style={{marginLeft:-430,fontSize:15}} >Email:</label>
        </div>
        <div className="col-md-4" >
          <input
           style={{width:"90%"}}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
</div>
<div style={{marginTop:20,height:80}} >
<button onClick={() => history.push('/')}>Sign Up</button>
</div>
</div>
<div>
          </div>
         <br/>
        
        </form>
        </div>
        <div>  
                 </div>  
                 </div>  
                 <div style={{display:"inline"}}>
                     <ul>
      <Link  to="/"><li  style={{color:"red",float:"right"}}>Already have account?</li></Link>
                </ul>
                </div>
      </div>
         );
    }
}
 