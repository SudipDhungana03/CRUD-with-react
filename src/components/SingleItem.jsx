import React from 'react';
import './SingleItem.css';

const SingleItem = ({ item, removeItem, editItem, toggleComplete }) => {
  const { id, name, completed } = item;

  return (
    <div className="grocery-item">
      <div className="item-info">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <p className={completed ? 'completed' : ''}>{name}</p>
      </div>
      <div className="item-actions">
        <button className="edit-btn" onClick={() => editItem(id)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => removeItem(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
