
import React, { useState } from 'react';
import BeachItem from '../BeachItem/BeachItem'; 
import './BeachPackingList.css'; 
import BeachForm from '../BeachForm/BeachForm'; 

const BeachPackingList = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemText) => {
    setItems([...items, itemText]);
  };

  return (
    <section className="beach-packing-list">
      <h2 className="packing-list-title">Faça aqui sua lista de itens para levar para a Praia</h2>
      <BeachForm onAdd={addItem} />
      <ol className="beach-items">
        {items.map((item, index) => (
          <BeachItem item={item} key={index} />
        ))}
      </ol>
    </section>
  );
};

export default BeachPackingList;
