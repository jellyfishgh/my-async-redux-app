import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts
    ? products.map(product => <Product key={product.id} {...product} />)
    : <em>请在购物车中添加一些商品</em>

  return (
    <div>
      <h3>我的购物车</h3>
      <div>
        {nodes}
      </div>
      <p>
        总价: &#36;{total}
      </p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}
      >
        结算
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
