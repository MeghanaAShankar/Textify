import React, { Component } from 'react';

 class SendEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recents:[],
           message:[],
           selectValue:[],
           mailIds:["----select----","meghananikhi@gmail.com","enelnozlin2796@gmail.com"]};
      }
     mySubmit = (event) => {
        event.preventDefault();
        this.setState({
          recents: [...this.state.recents,'To: '+this.state.selectValue,'Message: '+this.state.message],
        });
        this.props.onSend(this.state.recents);
      }
      myChange = (event) => {
        this.setState({ message: event.target.value });
      }
      selectValue = event => {
        this.setState({ selectValue: event.target.value });
      }
     render() { 
         return ( 
             <div style={{marginTop:"40px"}} >
            <form style={{backgroundColor:"gray"}} onSubmit={this.mySubmit}>
            <div className="col-md-12" style={{display:"flex",marginLeft:200}}> 
               <div className="col-md-2" > <label  >To:</label></div>
                 <div className="col-md-10" style={{width:508,marginLeft:56}}> 
                   <select  value={this.state.selectValue} onChange={this.selectValue} style={{width:"100%"}}>
                  {this.state.mailIds.map(mailid=>(
                     <option key={mailid} value={mailid}> 
                     {mailid}
                     </option>
                  ))}
                   </select>
               </div>
            </div>
           <div className="col-md-12" style={{display:"flex",marginLeft:200,marginTop:10}}> 
             <div className="col-md-2" > <label style={{marginLeft:-46}}>Message:</label></div>
             <div className="col-md-10" style={{width:500,marginLeft:55}}>
             <textarea style={{width:"100%",height:"80px"}} type='text'placeholder="Type your message here" value={this.state.message}onChange={this.myChange}/>
             </div>
             </div>
      <div>     
      <button style={{height:45,marginTop:20,marginBottom:20,marginLeft:275}}>Send Email</button>
              </div>
              </form>
              <div style={{backgroundColor:"rgb(115, 120, 124)"}} >
                <div>
              <span>Recent Messages </span>
              <span style={{float: "right",marginRight:40}}>From: {this.props.email}</span>
                 </div>
            </div>
             </div>
          );
     }
 }
  
 export default SendEmail;
 