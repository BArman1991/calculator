import React from 'react';


const  Cell = () => {
  function Push(){
    return 5;
  }
  return (
     <div className="number">
        <button onClick={Push()}/>
      </div>
      );
};

export default Cell;