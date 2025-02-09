import React from "react";
import ProductGrid from './ProductGrid';
import './FoodOrderApp.css'; 
import HeadImg from '../assets/header-img.png';
import Remove from '../assets/Remove.png'
import Close from '../assets/Close.png'
import NextArrow from '../assets/arrow-forward.png';
import BackArrow from '../assets/arrow-back.png';

const FoodOrderApp = ({selectedItems, setSelectedItems, sidebarOpen, setSidebarOpen}) => {
  // const [selectedItems, setSelectedItems] = useState([]);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const addToSidebar = (item) => {
  //   setSelectedItems((prev) => {
  //     const existingItem = prev.find((i) => i.id === item.id);
  //     if (existingItem) {
  //       return prev.map((i) =>
  //         i.id === item.id && i.quantity < item.items
  //           ? { ...i, quantity: i.quantity + 1 }
  //           : i
  //       );
  //     }
  //     return [...prev, { ...item, quantity: 1 }];
  //   });
  //   if (!sidebarOpen) {
  //     setSidebarOpen(true);
  //   }
    
  // };

  const increaseCount = (id) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.items
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseCount = (id) => {
    setSelectedItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      {sidebarOpen && (
        <div className="sidebar">
          {/* Header */}
          <div className="header">
            <img 
              src= {HeadImg} 
              alt="Food header" 
            />
            <button className="close-button" onClick={() => setSidebarOpen(false)}>
              <img src={Close} alt="" />
            </button>
          </div>
          {/* Title Section */}
          <div className="title-section">
            <div className="breadcrumb">Special Offers Meal Deal 1</div>
            <h2>Please select your items</h2>
          </div>
          <h2 className="sidebar-title">Selected Items</h2>

          {selectedItems.length === 0 ? (
            <p className="sidebar-empty">No items selected.</p>
          ) : (
            <div className="sidebar-items">
              {selectedItems.map((item) => (
                <div key={item.id} className="sidebar-item">
                  <img src={item.image} alt={item.title} className="sidebar-image" />
                  <div className="sidebar-item-info">
                    <p>{item.title}</p>
                    <p>£{(item.price * item.quantity).toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => decreaseCount(item.id)}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => increaseCount(item.id)}
                        className="quantity-button"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="delete-button"
                      >
                        <img src={Remove} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="footer">
           <div className="total-container">
             <div className="total-pay">
              <div className="total-amount">
                <span>Total to pay</span>
                <span className="total-price">£{totalAmount.toFixed(2)}</span>
              </div>  
            </div>
            <div className="delivery-info">
                Delivery & Tax will be calculated in the next step
              </div>
           </div>

            <div className="footer-buttons">
              <button className="back-button"><span className="button-text">Take me back </span><span className="back-arrow"><img src={BackArrow} alt="" /></span></button>
              <button className="next-button"><span className="button-text">Next Step </span><span className="next-arrow"><img src={NextArrow} alt="" /></span></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodOrderApp;