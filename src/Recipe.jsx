import React, { useState } from "react"

export function RenderComponent({data, setShowCarousel}){
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const handleRecipeClick = (item) => {
    setSelectedRecipe(item)
    setShowCarousel(false)
  }
    return(
        <>
        {!selectedRecipe ? (
        <div className="container" >          
          {data.map(function(item){
            return ( 
              <>
              <div  key={item.id} className="img-div" > 
                <img src={item.imageUrl} alt="" />
              <div className="recipe-title-div">
                <h3>{item.title}</h3>
                <span>{item.rating}</span>
                <button onClick={()=> handleRecipeClick(item)} className="recipe-btn">Recipe</button> 
                </div>                
              </div>
              </>
            )          
          })} 
        </div> 
        ) : (  
          <div className="selected-container">
            <div className="selected-img-div">
              <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} />
            <h2>{selectedRecipe.title}</h2>
            </div>
            <div className="recipe-div">
            <h2>Recipe</h2>
            <p>Here is a recipe for {selectedRecipe.title}. It’s delicious and easy to make!</p>
              <p>{selectedRecipe.about}</p>
            <button>Order Now</button>
            </div>
          </div>       
        )}
        </> 
    )
} 
 