import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import MyOrder from './screens/MyOrder';
import { 
  BrowserRouter as Router ,
  Routes,
Route,
} from "react-router-dom";
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/creatuser" element={<Signup/>}/>
        <Route exact path="/myOrder" element={<MyOrder/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
