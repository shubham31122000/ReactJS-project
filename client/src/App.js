import './App.css';
import AddProduct from './pages/AddProduct';
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addProduct" component={AddProduct} />
      </Switch>
      
    </>
  );
}

export default App;
