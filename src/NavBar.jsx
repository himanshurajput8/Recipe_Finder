export function NavBarComponent({searchTerm, setSearchTerm}){
    return(
        <header>
            <nav>
                <div className="recipe-logo">
                    <img src="https://t3.ftcdn.net/jpg/04/41/73/28/360_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg" alt="" />
                </div>
                {/* <h2>Recipe Finder</h2> */}
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#recipe">Recipe</a></li> 
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <div>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div> 
            </nav>
            <div className="search-div">
            <input type="search" placeholder="Search.."
                    value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}
                />
            </div>
        </header>
    )
} 