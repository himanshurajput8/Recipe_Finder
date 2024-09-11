import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/users", () => [
        { id: 1, catogory:'burger', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/01c/c13b152416d1ebd6edd72f0c877d701c.jpeg?output-format=webp', title: 'Burger King', rating: '4.3 *', about:'Experience the legendary Whopper, Burger King s signature burger that s been a crowd-pleaser for decades. This iconic burger features a flame-grilled 100% beef patty, cooked over an open flame for that distinctive smoky flavor. Its topped with a slice of rich, melted American cheese that perfectly complements the beef. The Whopper is built on a freshly toasted sesame seed bun, layered with crisp lettuce, juicy tomato slices, and crunchy pickles. Add a generous smear of creamy mayonnaise and zesty ketchup, along with a touch of mustard, for a burger that bursts with flavor in every bite.'},
        { id: 2, catogory:'burger', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/13c/3f7a166e59b67b2e008ab7dc0415813c.png?output-format=webp', title: 'McDonalds', rating: '3.8 *' , about:'Enjoy the classic McDonald s burger, a timeless favorite loved by millions. Our burger features a juicy,  beef patty seasoned with just the right amount of salt and pepper, cooked to perfection on a hot grill. It s topped with a slice of American cheese, melted to creamy perfection We start with a freshly toasted sesame seed bun, adding a layer of crisp, shredded lettuce and a slice of ripe tomato for a touch of freshness. Pickles and finely diced onions add a satisfying crunch, while a dollop of tangy ketchup and zesty mustard bring the flavors together.'},
        { id: 3, catogory:'burger', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/5f0/5a1468016a7a1dbec119dfa2cb70c5f0.jpeg?output-format=webp', title: 'Wendy Burgers', rating: '3.5 *', about:'Indulge in the ultimate burger experience with Wendys Baconator. This mouthwatering creation features two fresh, never frozen beef patties, each seasoned and grilled to perfection. Layered with crispy, savory bacon strips and topped with a generous slice of melted American cheese, this burger is a carnivore s dream. We start with a perfectly toasted bun, adding a dollop of creamy mayonnaise and zesty ketchup to enhance the rich, meaty flavors. Fresh, crisp lettuce and ripe tomato slices bring a burst of freshness, balancing out the indulgent toppings.' },
        { id: 4, catogory:'burger', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/194/bdae69d1834e29ff3ae98112987d3194.jpeg?output-format=webp', title: 'Junkies Zone', rating: '4.2 *' },
       
        {id:5,  catogory:'pizza', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/a21/df9a57a889f3ccd7e30fabf487ffba21.png?output-format=webp', title: 'Crusty Culture - Artisan Pizzas',rating: '4.3 *'},
        {id:6, catogory:'pizza', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/eba/e0c7c8f2a16b1261dc6e839f1b64feba.jpg?output-format=webp', title: 'Caffe Tonnio',rating: '4.2 *'},
        {id:7, catogory:'pizza', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/d17/14d8197b31ae36df0b697ba52b204d17.jpeg?output-format=webp', title: 'Domino Pizza',rating: '3.5 *'},
        {id:8, catogory:'pizza', imageUrl: 'https://b.zmtcdn.com/data/dish_photos/6aa/f55016931d13f7489c6140de76fa16aa.jpg', title: 'Pizza hut',rating: '4.1 *'}, 
    
        {id: 9, catogory:'foods',  imageUrl: 'https://b.zmtcdn.com/data/pictures/8/20269728/71ea363befeacbe471f1e87640fabbef_o2_featured_v2.jpg', title: 'North India', rating: '4.1 *'},
        {id: 10, catogory:'foods', imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/5/7765/a5086588e51dab53910afd3e35f26889_o2_featured_v2.jpg', title: 'North Indian', rating: '3.9 *'},
        {id: 11, catogory:'foods', imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg', title: 'North Indian', rating: '4.3 *'},
        {id: 12, catogory:'foods', imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg', title: 'South indian', rating: '4.0 *'},

      ])
    }
  })
} 