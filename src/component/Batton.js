import React from 'react';
import './Button.css'




// export default class Batton extends React.Component{
//   handaleClick(e){
//       console.log(e);
//   };
//     render(){
//       const buttonClass = this.props.className ? "Button " + this.props.className : "Button";
//     //   console.log(this.value);
//       return(
//         <div className={buttonClass}>
//           <button className={buttonClass} onClick={ () => this.handaleClick(this.props.value)  }>{this.props.value}</button>
//         </div>
//       )
//     }
// }


const Batton = (props) => {
    const buttonClass = props.className ? "Button " + props.className : "Button";
    return(
        <div className={buttonClass} 
        onClick={() => props.changeValue()}
        >
        {props.value}
        </div>
    )
}

export default Batton;


