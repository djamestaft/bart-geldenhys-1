import React from "react"
import ProductArea from '../components/Organisms/ProductArea/ProductArea';

export default {
  title: "Organisms",
}

export const productArea = () => (
  <div style={{ 
    padding: "16px", 
    display: "flex",
    justifyContent: 'space-evenly'
  }}>
    <ProductArea />
  </div>
)