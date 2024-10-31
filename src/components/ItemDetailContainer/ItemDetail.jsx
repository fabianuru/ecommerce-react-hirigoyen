import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className="item-detail">
    <img src={product.img} alt="" />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>

  </div>
  )
}

export default ItemDetail