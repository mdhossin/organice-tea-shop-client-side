

import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import AboutUs from './components/pages/About/AboutUs/AboutUs/AboutUs';
import Blogs from './components/pages/Blogs/Blogs/Blogs';
import Contact from './components/pages/Contact/Contact/Contact';
import Home from './components/pages/Home/Home/Home';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder/PlaceOrder';

import BeautyProducts from './components/pages/Products/BeautyProducts/BeautyProducts/BeautyProducts';
import BodyCares from './components/pages/Products/BodyCares/BodyCares/BodyCares';
import HealthProducts from './components/pages/Products/HealthProducts/HealthProducts/HealthProducts';
import NatureProducts from './components/pages/Products/NatureProducts/NatureProducts/NatureProducts';

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
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/bodycare" element={<BodyCares></BodyCares>}></Route>
      <Route path="/healthcare" element={<HealthProducts></HealthProducts>}></Route>
      <Route path="/beautycare" element={<BeautyProducts></BeautyProducts>}></Route>
      <Route path="/naturalcare" element={<NatureProducts></NatureProducts>}></Route>
      <Route path="/placeorder/:id" element={<PlaceOrder></PlaceOrder>}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
