// App.js
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import DraggableComponent from './components/DraggableComponent';
import DesignArea from './components/DesignArea';
import ComponentArea from './components/ComponentArea';

const App = () => {
  const [components, setComponents] = useState([]);

  const handleDrop = (droppedItem) => {
    setComponents((existingItems) => [...existingItems, droppedItem]);
  };

  return (
    <DndContext>
      <div style={{ display: 'flex' }}> {/* Parent container */}
        <ComponentArea /> {/* Component area on the left */}
        <DesignArea onDrop={handleDrop} components={components} /> {/* Design area on the right */}
      </div>
    </DndContext>
  );
};

export default App;
