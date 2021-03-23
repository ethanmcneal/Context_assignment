import { Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
    <Navbar />
    <Route exact path='/' component={Home} />
    
      
    </div>
  );
}

export default App;
