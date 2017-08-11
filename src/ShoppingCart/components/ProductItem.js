import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) =>
  <div
    style={{
      marginBottom: 20
    }}
  >
    <Product {...product} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}
    >
      {product.inventory > 0 ? '添加到购物车' : '已卖光'}
    </button>
  </div>

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
