import React from 'react'

const Sep28 = (props) => {
  
  return (
    <div>
      <div>
        <h2>Product List</h2>
        <ul>
          {props.products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
    </div>
    </div>
  )
}

export default Sep28