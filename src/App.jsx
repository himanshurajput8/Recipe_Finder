import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBarComponent } from './NavBar';
import { CarouselComponent } from './Carousel';
import { makeServer } from './server';
import { RenderComponent } from './Recipe';
import { FooterComponent } from './Footer';

function App() {
  makeServer()
  const [data, setData] = useState([]);
  const[searchTerm, setSearchTerm] = useState('')
  const[showCarousel, setShowCarousel] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.catogory.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <NavBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      { !searchTerm && showCarousel && <CarouselComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
    
      <RenderComponent data={filteredData} setShowCarousel={setShowCarousel}/> 
      <FooterComponent/>
    </>
  )
} 

export default App; 
