// ComponentArea.js
import React from 'react';

const ComponentArea = () => {
  return (
    <div style={
        { 
            width: '250px', 
            height: 'calc(80vh - 40px)', // 40px for top and bottom padding 
            backgroundColor: 'lightgray',
            padding: '20px',
            border: '2px dashed #ccc',
            borderRadius: '5px',
            margin: '20px auto', // Center the design area horizontally (Change this to move to the right)
            marginTop: '100px', // Adjust margin to move down
            marginRight: '4px', // Adjust margin to move to the right
        }
    }>
      {/* Blank square */}
    </div>
  );
};

export default ComponentArea;
