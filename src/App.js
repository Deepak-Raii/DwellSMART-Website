import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import Contact_us from './components/Contact_us';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='/services' Component={Services}/>
        <Route path='/contact_us' Component={Contact_us}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
