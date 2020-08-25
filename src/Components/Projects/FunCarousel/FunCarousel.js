import React, {useState} from 'react'
import "./FunCarousel.css"

export default function TrinityPlaceShelter() {
 
  // let [id, updateId] = useState('b6')
    

  function run(interval, frames) {
    var int = 1;
    
    function func() {
      document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
    
}

  run(1000, 10); //milliseconds, frames
  
  return (
    <div className="fun-div" >
      
    </div>
  )
}
