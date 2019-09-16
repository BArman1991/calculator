import React from 'react';

function createData(1, 2, 3) {
  return {1, 2, 3};
}


 const rows = [
  createData(1, 2, 3),
  createData(4, 5, 6),
  createData(7, 8, 9),
];

export default class Body extends React.Component {
  render(){
      return (
          <div>
            <Arr />
          </div>
      );
  }
};

