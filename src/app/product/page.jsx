"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter()
    const palceorder = () => {
        alert("Order Confirmed")
        router.push("/")
    }
  return (
    <div>
      <h1>This is product page</h1>
      <li>Buy iphone</li>
      <button className='' onClick={palceorder}>Confirm Order</button>
    </div>
  )
}

export default page
