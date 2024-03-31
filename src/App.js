
import './App.css';
import Card from './components/Card';
import Home from './components/Home';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Ullu from './components/Ullu';
function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/card' exact element={<Card/>}/>
    <Route path='/ullu' exact element={<Ullu/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
