import React from 'react';

const ProductsList = ({ products }) =>
  products && (
    <div>
      {products.map(product => (
        <h4 key={product.id}>
          {product.id} - {product.employee_name}
        </h4>
      ))}
    </div>
  );

export default ProductsList;
