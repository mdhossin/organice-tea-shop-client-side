

import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import AboutUs from './components/pages/About/AboutUs/AboutUs/AboutUs';
import Contact from './components/pages/Contact/Contact/Contact';
import Home from './components/pages/Home/Home/Home';
import Navigation from './components/pages/Shared/Navigation/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
