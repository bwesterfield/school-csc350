import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Internet from './pages/Internet';
import Automobile from './pages/Automobile';
import PersonalComputer from './pages/Computers';
import './App.css';

export default function App() {
  return (
    //<!-- Grabbed boostrap layout from - https://getbootstrap.com/docs/4.0/components/navbar/ -->
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          Inventions
        </Link>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link' to='/'>
              Home
            </Link>

            <Link className='nav-item nav-link' to='/Internet'>
              Internet
            </Link>

            <Link className='nav-item nav-link' to='/Automobile'>
              Automobile
            </Link>

            <Link className='nav-item nav-link' to='/Computers'>
              Personal Computers
            </Link>
          </div>
        </div>
      </nav>

      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/internet' element={<Internet />} />
          <Route path='/automobile' element={<Automobile />} />
          <Route path='/computers' element={<PersonalComputer />} />
        </Routes>
      </div>
    </>
  );
}
