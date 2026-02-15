"use client"

import style from "./page.module.css"
import State from "./State.jsx"
import { useRouter } from "next/navigation"
export default function Home() {
     const Router = useRouter()
  return (
    
      <main>
        <State />

        <button type ='button' onClick={()=> Router.push("/class")}> Go to class page</button>
      </main>
  )
}
