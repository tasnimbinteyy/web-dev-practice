import { title } from 'process'
import React from 'react'

function page({params}) {
  return (
    <div>
      User information is: {params.userid}
    </div>
  )
}

export default page

export function generateMetadata(){
  return {
    title: "Welcome tasnim",
    description: "This is tasnims website"
  }
}