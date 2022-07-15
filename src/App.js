import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer,{ProductList} from './Components/ProductList/ProductList'
import Nav from "./Components/Navbar/NavMenu";
function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
