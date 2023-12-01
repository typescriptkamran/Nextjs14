const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

import React from 'react'

const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  

  
  const page = () => {
    return (
        <ul>{listItems}</ul>
      );
      }
  
  export default page