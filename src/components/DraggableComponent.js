// DraggableComponent.js
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';

const DraggableComponent = ({ type, config }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: type });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
        cursor: 'move',
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '5px',
      }}
      {...attributes}
      {...listeners}
    >
      Draggable {type}
    </div>
  );
};

export default DraggableComponent;
