import { useState, useEffect } from "react";

const imageData = [
    'https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?ga=GA1.1.1200221896.1722670122&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/project-with-luxury-food-colorful-background_1027059-9419.jpg?ga=GA1.1.1200221896.1722670122&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/close-up-hands-holding-device_23-2149177874.jpg?ga=GA1.1.1200221896.1722670122&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/close-up-hands-using-smartphone_23-2149250119.jpg?ga=GA1.1.1200221896.1722670122&semt=ais_hybrid',
];

export function CarouselComponent() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imageData.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="carousel">            
                
            <div className="imageDiv">
                <img src={imageData[index]}/>
            </div>
        </div>
    )
}  
