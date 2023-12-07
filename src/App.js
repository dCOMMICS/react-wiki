import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filter/Filter";


function App() {
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
          <div className = "row"></div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
