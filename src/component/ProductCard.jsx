import React from 'react'





const ProductCard = ({ title, description, price, image, inStock, currency, items, onAdd }) => {
  return (
    <div className="product-card">
      <div className="product-content">
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">
            {currency} {Number(price).toFixed(2)}
          </p>
          <p className="product-availability"
          style={{color: items === 0 ? 'red' : 'green'}}
          >            
            {items === 0 ? 'Out of Stock' : `${items} items left`}
          </p>
        </div>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
          <div className="add-button-wrapper">
            <button
              className={`add-button ${inStock && items > 0 ? 'active' : 'disabled'}`}
              disabled={!inStock || items === 0}
              onClick = {onAdd}
            >
              <span className="add-button-icon">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};
 
export default ProductCard;