import React from 'react'
import ProductCard from './ProductCard';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'
import image16 from '../assets/image16.png'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'
import image20 from '../assets/image20.png'


const menuItems = [
  {
    id: 1,
    title: "Cheese Lover's Delight",
    description: "1 Cheeseburger, 1 Big Mac™, 1 Cheese Fries, 2 cold drinks",
    price: 19.99,
    image: image1,
    inStock: true,
    currency: "GBP",
    items: 7,
  },
  {
    id: 2,
    title: "Family Feast",
    description: "2 Nuggets, 5 medium sized French Fries, 5 cold drinks",
    price: 33.50,
    image: image2,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 3,
    title: "Veggie Lover's Combo",
    description: "1 Veggie Burger, 1 Veggie Wrap, 1 Large Fries, 3 cold drinks",
    price: 22.30,
    image: image3,
    inStock: true,
    currency: "GBP",
    items: 9,
  },
  {
    id: 4,
    title: "Double Trouble",
    description: "2 Big Mac™, 1 Double Cheeseburger, 3 French Fries, 3 cold drinks",
    price: 25.99,
    image: image4,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 5,
    title: "Chicken Delight",
    description: "2 McChicken™, 2 Chicken Nuggets, 4 Medium Fries, 4 cold drinks",
    price: 27.50,
    image: image5,
    inStock: true,
    currency: "GBP",
    items: 4,
  },
  {
    id: 6,
    title: "Spicy Supreme",
    description: "1 Spicy McChicken™, 2 McChickens, 2 Hot Wings, 4 French Fries",
    price: 30.00,
    image: image6,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 7,
    title: "Ultimate Breakfast Box",
    description: "2 Bacon Roll, 2 Hash Browns, 2 Coffees, 2 Orange Juices",
    price: 24.99,
    image: image7,
    inStock: true,
    currency: "GBP",
    items: 5,
  },
  {
    id: 8,
    title: "Mexican Fiesta",
    description: "1 Burrito, 1 McChicken Wrap, 2 Medium Fries, 2 cold drinks",
    price: 21.40,
    image: image8,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 9,
    title: "Classic Meal Deal",
    description: "1 Big Mac™, 1 Cheeseburger, 2 Medium Fries, 2 cold drinks",
    price: 19.99,
    image: image9,
    inStock: true,
    currency: "GBP",
    items: 6,
  },
  {
    id: 10,
    title: "Fiery Hot Wings Pack",
    description: "8 Hot Wings, 2 Medium Fries, 2 cold drinks",
    price: 22.99,
    image: image10,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 11,
    title: "Family Feast Deluxe",
    description: "2 Big Mac™, 2 Chicken Nuggets, 4 Fries, 4 cold drinks",
    price: 35.00,
    image: image11,
    inStock: true,
    currency: "GBP",
    items: 4,
  },
  {
    id: 12,
    title: "Cheese & Bacon Supreme",
    description: "1 Bacon Cheeseburger, 2 McChicken™, 1 Large Fries, 3 cold drinks",
    price: 28.99,
    image: image12,
    inStock: true,
    currency: "GBP",
    items: 2,
  },
  {
    id: 13,
    title: "Mighty McFeast",
    description: "2 Big Mac™, 1 Quarter Pounder™, 4 Medium Fries, 4 cold drinks",
    price: 32.00,
    image: image13,
    inStock: true,
    currency: "GBP",
    items: 8,
  },
  {
    id: 14,
    title: "Pasta Fiesta",
    description: "1 Spaghetti Bolognaise, 1 McChicken™, 2 Garlic Bread, 3 cold drinks",
    price: 25.50,
    image: image14,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 15,
    title: "Summer BBQ Special",
    description: "1 BBQ Chicken Burger, 2 Fries, 1 Soft Drink, 1 Ice Cream",
    price: 21.99,
    image: image15,
    inStock: true,
    currency: "GBP",
    items: 10,
  },
  {
    id: 16,
    title: "Deluxe Chicken Box",
    description: "2 Grilled Chicken, 2 French Fries, 2 Cold Drinks, 1 Side Salad",
    price: 27.99,
    image: image16,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 17,
    title: "Ultimate Burger Pack",
    description: "2 Double Cheeseburgers, 2 Medium Fries, 4 Cold Drinks",
    price: 34.99,
    image: image17,
    inStock: true,
    currency: "GBP",
    items: 12,
  },
  {
    id: 18,
    title: "Pizza Lovers Special",
    description: "2 Personal Pizzas, 1 French Fries, 3 Soft Drinks",
    price: 30.99,
    image: image18,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
  {
    id: 19,
    title: "Steakhouse Combo",
    description: "1 Sirloin Steak, 1 Caesar Salad, 1 Large Fries, 1 Cold Drink",
    price: 38.50,
    image: image19,
    inStock: true,
    currency: "GBP",
    items: 5,
  },
  {
    id: 20,
    title: "Fried Chicken Deluxe",
    description: "2 Fried Chicken Legs, 3 Fries, 2 Cold Drinks",
    price: 22.50,
    image: image20,
    inStock: false,
    currency: "GBP",
    items: 0,
  },
];


const ProductGrid = ({addToSidebar}) => {
  return (
    <div className="product-grid">
      <div className="product-grid-layout">
        {menuItems.map(item => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            inStock={item.inStock}
            currency={item.currency}
            items={item.items}
            onAdd={() => addToSidebar(item)} // Pass addToSidebar here
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;