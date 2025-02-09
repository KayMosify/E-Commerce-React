import React, { useState } from 'react'
import ProductGrid from '../component/ProductGrid'
import FoodOrderApp from '../component/FoodOrderApp'

const Menu = () => {
const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

const addToSidebar = (item) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.quantity < item.items
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
    
  };

  return (
   <>
    <h1 className='header-text'>Today's Menu</h1>
    {/* Pass addToSidebar to ProductGrid */}
    <ProductGrid addToSidebar={addToSidebar}/>
    {/* Pass necessary props to FoodOrderApp */}
    <FoodOrderApp
    selectedItems={selectedItems}
    setSelectedItems={setSelectedItems}
    sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}
    />
   </>
  );
};

export default Menu;