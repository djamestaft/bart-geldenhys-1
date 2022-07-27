import React from 'react'

function ProductCard(props: any) {
  return (
    <div className='product-card'>
      <img className='product-card-image' src={props.backgroundImage} alt="" height="75px" width="75px" />
      <h4 className='uppercase'>{props.productTitle}</h4>
      <p>{props.productDescription}</p>
      <h4 className='uppercase font-bold'>R{props.productPrice}</h4>
    </div>
  )
}

export default ProductCard
