import './App.css';
import { useState } from 'react';
import ListPets from './components/ListPets';

function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div>
        <h4>Search your favorite pet by animal like dog, cat, or bird</h4>
        <input
          type='text'
          placeholder='Search Animal...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='form-control mb-3'
        />
      </div>
      <div>
        <div className='table-responsive'>
          <table className='table table-striped pets-table mx-auto'>
            <thead>
              <tr>
                <th className='text-center'>Image</th>
                <th className='text-start'>Name</th>
                <th className='text-start'>Speciality</th>
              </tr>
            </thead>
            <tbody>
              <ListPets value={search} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
