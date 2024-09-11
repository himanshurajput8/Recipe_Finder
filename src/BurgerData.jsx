
import { RenderComponent } from "./Recipe"
const BurgerData = [
    {id:1,  imageUrl: 'https://b.zmtcdn.com/data/dish_photos/01c/c13b152416d1ebd6edd72f0c877d701c.jpeg?output-format=webp', title: 'Burger King', rating: '4.3 *'},
    {id:2, imageUrl: 'https://b.zmtcdn.com/data/dish_photos/13c/3f7a166e59b67b2e008ab7dc0415813c.png?output-format=webp', title: 'McDonalds', rating: '3.8 *'},
    {id:3,  imageUrl: 'https://b.zmtcdn.com/data/dish_photos/5f0/5a1468016a7a1dbec119dfa2cb70c5f0.jpeg?output-format=webp', title: 'Wendy Burgers', rating: '3.5 *'},
    {id:4,  imageUrl: 'https://b.zmtcdn.com/data/dish_photos/194/bdae69d1834e29ff3ae98112987d3194.jpeg?output-format=webp', title: 'Junkies Zone', rating: '4.2 *'},
    
]
export function BurgerDataRender(){ 
    return(
        <div>
            <RenderComponent data={BurgerData}/>  
        </div>
    )
} 