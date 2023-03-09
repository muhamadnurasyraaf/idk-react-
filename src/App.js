import { BrowserRouter , Routes , Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import  Home   from './pages/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Link to="/"> Home </Link>
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/*' />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
