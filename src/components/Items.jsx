import React from 'react';
import SingleItem from './SingleItem';
import './Items.css';

const Items = ({ items, removeItem, editItem, toggleComplete }) => {
  return (
    <div className="grocery-items">
      <div className="items-header">
        <h3>Grocery List</h3>
        <span className="items-count">{items.length} items</span>
      </div>
      
      {items.length === 0 ? (
        <p className="empty-list">Your list is empty. Add some items!</p>
      ) : (
        <div className="items-list">
          {items.map((item) => (
            <SingleItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              editItem={editItem}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;
