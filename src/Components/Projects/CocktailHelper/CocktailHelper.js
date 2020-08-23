import React from 'react'
import "./CocktailHelper.css"

import { Fade, Rotate, Flip, Zoom, Slide, JackInTheBox, Hinge } from "react-awesome-reveal";

export default function CocktailHelper() {
  return (
    <div>
    <h1 className="cocktail-app-title">Cocktail-App</h1>
      <div className="cocktail-helper-container">
        <img className="cocktail-img" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598193378/Portfolio%20Pics/cocktail-helper-desktop_w0tv2s.png" alt=""/>
        
        <Slide>
          <div className="content-cocktail-helper">
            <div className="text-card-cocktail">
           
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat debitis nulla magnam nam nemo voluptate delectus ad, dignissimos fuga consequuntur. Maxime, repudiandae optio facilis quod quo numquam dolore incidunt ipsa.</p>
        </div>  
        </div>
        </Slide>
      </div>
      </div>
  )
}
