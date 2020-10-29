import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-md-12" style={{display:"flex"}}>
            <div style={{float:"left"}}><b>Textify</b> Because Email Messaging Rocks</div> 
            <div style={{marginLeft:"450px"}}>{this.props.email}</div>
            <div style={{marginLeft:"30px"}}> <Link to="/">Logout</Link> </div>  
            </div>
          );
    }
}
 
export default Header;