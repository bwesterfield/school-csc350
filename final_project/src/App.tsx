import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tractors from './pages/Tractors';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header homeLinkPath='/Home' tractorsLinkPath='/Tractors' newsLinkPath='/News' contactUsLinkPath='/ContactUs' />

      <main className='container mt-4'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Tractors' element={<Tractors />} />
          <Route path='/News' element={<News />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

      <Footer homeLinkPath='/Home' tractorsLinkPath='/Tractors' newsLinkPath='/News' contactUsLinkPath='/ContactUs' />
    </>
  );
}

export default App;
