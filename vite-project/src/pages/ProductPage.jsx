import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../component/Menu'

function ProductPage() {
  
  let {id,name} = useParams();
  return (
    <div>
      <Menu/>
      <p>ID = {id}</p>
      <p>Name = {name}</p>
      <h1>This is product page</h1>
    </div>
  )
}

export default ProductPage
