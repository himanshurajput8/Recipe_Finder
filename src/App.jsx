import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBarComponent } from './NavBar';
import { CarouselComponent } from './Carousel';
import { makeServer } from './server';
import { RenderComponent } from './Recipe';
import { FooterComponent } from './Footer';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';

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

 function SearchResults({setSearchTerm, data}){
  const { searchTerm } = useParams()
  useEffect(() => {
    setSearchTerm(searchTerm)
  }, [searchTerm, setSearchTerm])
  
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
  item.catogory.toLowerCase().includes(searchTerm.toLocaleLowerCase())
)
  return <RenderComponent data={filteredData} setShowCarousel={()=>{}}/>
 }

  return (
    <Router>
      <NavBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path='/' element={
          <>
            { !searchTerm && showCarousel && <CarouselComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
              <RenderComponent data={filteredData} setShowCarousel={setShowCarousel}/> 
          </>
        }/>     
        <Route path='/recipe/:id' element={<RenderComponent data={filteredData} setShowCarousel={setShowCarousel}/>}/>
        <Route path="/search/:searchTerm" element={<SearchResults setSearchTerm={setSearchTerm} data={data} />}
        />
      </Routes> 
      <FooterComponent/>
    </Router>
  )
} 

export default App;   
