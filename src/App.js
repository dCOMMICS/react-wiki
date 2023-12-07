import React, { useState,useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filter/Filter";
import Card from "./components/cards/Card";


function App() {

  let [pageNumber, setPageNumber] = useState (1);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{

  },[])
  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4"> 
      Rick & Morty <span className="text-primary">Wiki</span>
      </h1>

    <div className=" container">
      
      <div className = "row">
        <div className = "col-3">
          <Filter/>
        </div> 

        <div className = "col-8">
          <div className = "row">
            <Card/>
            <Card/>
            <Card/>
            {/* <div className = "col-4">Cards</div>
            <div className = "col-4">Cards</div>
            <div className = "col-4">Cards</div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
