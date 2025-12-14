import { Link } from 'react-router-dom';

type FooterProperties = {
  homeLinkPath: string;
  tractorsLinkPath: string;
  newsLinkPath: string;
  contactUsLinkPath: string;
};

export default function Footer({ homeLinkPath, tractorsLinkPath, newsLinkPath, contactUsLinkPath }: FooterProperties) {
  return (
    <footer className='container py-3 my-4'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <Link className='nav-link px-2 text-body-secondary' to={homeLinkPath}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link px-2 text-body-secondary' to={tractorsLinkPath}>
            Tractors
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link px-2 text-body-secondary' to={newsLinkPath}>
            News
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link px-2 text-body-secondary' to={contactUsLinkPath}>
            Contact Us
          </Link>
        </li>
      </ul>
      <p className='text-center text-body-secondary'>CSC350 - Innovative Web Development 2025</p>
    </footer>
  );
}
