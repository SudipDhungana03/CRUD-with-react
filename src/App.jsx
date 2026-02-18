import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import groceryItems from './data/groceryItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState(groceryItems);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [editId, setEditId] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 3000);
  };

  const addItem = (name) => {
    if (editId) {
      // Edit existing item
      setItems(items.map(item => 
        item.id === editId ? { ...item, name } : item
      ));
      setEditId(null);
      showAlert('success', 'Item updated');
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        name,
        completed: false
      };
      setItems([...items, newItem]);
      showAlert('success', 'Item added');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    showAlert('danger', 'Item removed');
  };

  const editItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setEditId(id);
    // You might want to populate the form here
    // For simplicity, we'll just set edit mode
    showAlert('success', 'Editing mode activated');
  };

  const toggleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const clearList = () => {
    setItems([]);
    showAlert('danger', 'List cleared');
  };

  return (
    <div className="app">
      <div className="container">
        {alert.show && (
          <div className={`alert alert-${alert.type}`}>
            {alert.message}
          </div>
        )}
        <Form 
          addItem={addItem} 
          clearList={clearList}
          showAlert={showAlert}
        />
        <Items 
          items={items}
          removeItem={removeItem}
          editItem={editItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
