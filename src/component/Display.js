import React from 'react';
import './Display.css';



const Display = (props) => {
  console.log('Display: ',props);
  return(
    <div className="Display">
      <input type="text" 
      onChange={(e) => props.changeValue(e) }
      // vasia={(e) => props.onAction(e)}
      value={props.value}  
      action={props.action} 
      result={props.result}
       />
       
    </div>
  );
};

export default Display;