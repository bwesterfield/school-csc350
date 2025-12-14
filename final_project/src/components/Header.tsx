import { Link } from 'react-router-dom';
import tractor from '../assets/tractor.png';

type HeaderProperties = {
  homeLinkPath: string;
  tractorsLinkPath: string;
  newsLinkPath: string;
  contactUsLinkPath: string;
};

export default function Header({ homeLinkPath, tractorsLinkPath, newsLinkPath, contactUsLinkPath }: HeaderProperties) {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <a className='navbar-brand' href='/Home'>
              <img src={tractor} alt='Bootstrap' width='30' height='24' />
            </a>
            <Link className='nav-item nav-link' to={homeLinkPath}>
              Home
            </Link>

            <Link className='nav-item nav-link' to={tractorsLinkPath}>
              Tractors
            </Link>

            <Link className='nav-item nav-link' to={newsLinkPath}>
              News
            </Link>

            <Link className='nav-item nav-link' to={contactUsLinkPath}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
