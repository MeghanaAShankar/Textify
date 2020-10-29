import React, { Component } from 'react';
class Recents extends Component {
    state = {  }
    render() { 
        return ( 
            <table>
            <tbody>
         {
         this.props.recents.map((recent, index) =>
        <tr>
        <td style={{color:"black"}}key={index}>{recent}</td>
        </tr>)
         }
           </tbody>
        </table>
         );
    }
}
export default Recents;
