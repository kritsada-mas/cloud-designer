// DesignArea.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const DesignArea = ({ onDrop }) => {
  const { isOver, setNodeRef } = useDroppable({
    onDrop: (event) => onDrop(event),
  });

  const squareSize = '45px'; // Adjust the size of each square here
  const gapSize = '5px'; // Adjust the gap size here
  const numRow = 14; // Adjust the rows of each square here, if the row is to low the vertical gap size will be to large
  const numCol = 26; // Adjust the columns of each square here

  

  const style = {
    width: 'calc(80% - 40px)', // 40px for left and right padding
    height: 'calc(80vh - 40px)', // 40px for top and bottom padding
    padding: '20px',
    border: '2px dashed #ccc',
    borderRadius: '5px',
    margin: '20px auto', // Center the design area horizontally (Change this to move to the right)
    marginRight: '15px', // Adjust margin to move to the right
    marginTop: '100px', // Adjust margin to move down
    backgroundColor: isOver ? '#f0f0f0' : 'transparent',
    overflow: 'auto', // Enable scrolling if content exceeds the area
    display: 'grid',
    gridTemplateColumns: `repeat(${numCol}, ${squareSize})`, // Adjust the size of each square
    gridRowGap: gapSize, // Adjust gap between rows as needed
    gap: gapSize, // Adjust gap between squares as needed
  };
  

  const droppableSquareStyle = {
    border: '1px solid #ccc', // Border color for droppable squares
    borderRadius: '5px',
    backgroundColor: 'white', // Adjust background color of droppable squares
    width: squareSize,
    height: squareSize,
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
  };

  // Create an array of droppable squares
  const droppableSquares = Array.from({ length: numRow * numCol }, (_, index) => (
    <div key={index} style={droppableSquareStyle}>
      {/* You can add any content here */}
    </div>
  ));

  return (
    <div ref={setNodeRef} style={style}>
      {droppableSquares}
    </div>
  );
};

export default DesignArea;
