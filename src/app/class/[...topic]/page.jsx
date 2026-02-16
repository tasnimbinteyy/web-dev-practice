import React from 'react'

function page({params}) {
  return (
    <div>
      this is catch all segment page(topic)
      <p>{params.topic}</p>
    </div>
  )
}

export default page
