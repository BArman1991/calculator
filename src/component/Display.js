import React from 'react';
import './Display.css';
// import Textfit from 'react-textfit';
import DynamicFont from 'react-dynamic-font';


const Display = (props) => {
  console.log('Display: ',props);
   
  return(
    <div className="Display">
    <p className='grisha'
      onChange={(e) => props.changeValue(e)}
      action={props.action} 
      result={props.result}
    >

    <DynamicFont smooth content={props.value + ''} />

    </p>
    </div>
  );
};

export default Display;



