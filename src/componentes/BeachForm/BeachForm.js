
import React, { useState } from 'react';
import './BeachForm.css';

const BeachForm = ({ onAdd }) => {
  const [itemText, setItemText] = useState('');

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(itemText);
    setItemText('');
  };

  return (
    <form className='beach-form' onSubmit={handleSubmit}>
      <label htmlFor='item'>Item:</label>
      <input
        type="text"
        id='item'
        placeholder='Digite o item para a praia'
        value={itemText}
        onChange={handleChange}
      />
      <button type='submit'>Adicionar</button>
    </form>
  );
};

export default BeachForm;
