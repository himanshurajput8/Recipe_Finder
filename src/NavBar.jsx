import { useNavigate  } from "react-router-dom"

export function NavBarComponent({searchTerm, setSearchTerm}){
    const navigate = useNavigate()

    const handleChange = (event) => {
        const newSearchTerm = event.target.value
        setSearchTerm(newSearchTerm)
        if(newSearchTerm){
            navigate(`/search/${newSearchTerm}`)
        }else{
            navigate('/')
        }
    }
    return(
        <header>
            <nav>
                <div className="recipe-logo">
                    <img src="https://t3.ftcdn.net/jpg/04/41/73/28/360_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg" alt="" />
                </div>
                {/* <h2>Recipe Finder</h2> */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/recipe">Recipe</a></li> 
                    <li><a href="/about us">About Us</a></li>
                    <li><a href="/contact us">Contact Us</a></li>
                </ul>
                <div>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div> 
            </nav>
            <div className="search-div">
            <input type="search" placeholder="Search.."
                    value={searchTerm} onChange={handleChange}
                />
            </div>
        </header>
    )
} 