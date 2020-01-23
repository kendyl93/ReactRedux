import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => {
  return (
    <div>
      {products &&
        // eslint-disable-next-line camelcase
        products.map(({ id, employee_name: name }) => <h4 key={id}>{name}</h4>)}
    </div>
  );
};

ProductsList.propTypes = { products: PropTypes.array };

export default ProductsList;
