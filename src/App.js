
import './App.css';
import {Routes,Route,HashRouter,Link} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
function App() {
  return<HelmetProvider>


  <HashRouter>
    <Link to="/contacts">Contacts</Link>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='contacts' element={<Contacts/>}/>
  </Routes>
  </HashRouter>
  </HelmetProvider>
}

export default App;
