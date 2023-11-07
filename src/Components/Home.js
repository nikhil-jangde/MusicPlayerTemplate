import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'
import { useState } from 'react'

function Home() {
    const [currentindex,setCurrentindex]= useState(1)

   function next() {
    if (currentindex < 5) {
        setCurrentindex(currentindex +1)
    }
   }
   function prev() {
    if (currentindex > 1) {
        setCurrentindex(currentindex -1)
    }
   }

  return (
    <div style={{width:'100%',height:"full",alignItems:"center",justifyContent:"center"}}>
       <div> {currentindex === 1 && <Tab1/> }
        {currentindex === 2 && <Tab2/> }
        {currentindex === 3 && <Tab3/> }
        {currentindex === 4 && <Tab4/> }
        {currentindex === 5 && <Tab5/> }</div>
   <div style={{width:"30%",marginLeft:"40%"}}><button  onClick={()=>prev()}>prev</button>
        <button onClick={()=>next()}>Next</button>
   </div>
    </div>
  )
}

export default Home
