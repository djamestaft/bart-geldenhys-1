import React from 'react'

function ProductCard(props: any) {
  return (
    <div className='product-card'>
      <img className='product-card-image' src={props.backgroundImage.src} alt="" height="75px" width="75px" />
      <h4 className='uppercase'>Product Title</h4>
      <p>Product Description Product Description Product Description Product Description Product Description Product Description</p>
      <h4 className='uppercase font-bold'>R400</h4>
    </div>
  )
}

export default ProductCard
