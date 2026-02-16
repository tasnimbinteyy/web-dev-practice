import React from 'react'
import Menu from '../component/Menu'
import { useParams } from 'react-router-dom'

function ProductPage() {

  let {fb_ID,YT_ID} = useParams();
  return (
    <div>
      <Menu/>
      <p>YouTube = {YT_ID}</p>
      <p>Facebook = {fb_ID}</p>
      <h1>This is profile page</h1>
    </div>
  )
}

export default ProductPage


