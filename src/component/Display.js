import React from 'react';
import './Display.css';



const Display = (props) => {
  console.log('Display: ',props);
  return(
    <div className="Display">
      <input type="text" 
      vasia={(e) => props.updateChange(e)}
      value={props.value}  
      action={props.action} 
      result={props.result}
       />
       
    </div>
  );
};

export default Display;