import { useState, useEffect } from 'react';

type Tractor = {
  id: string;
  tractorManufacturer: string;
  tractorMakeModel: string;
  tractorYear: string;
};

export default function Tractors() {
  const [manufacturer, setManufacturer] = useState('');
  const [makeModel, setMakeModel] = useState('');
  const [year, setYear] = useState('');
  const [tractors, setTractors] = useState<Tractor[]>([]);
  const TRACTOR_API_URL = 'http://192.168.0.26:8080/api/tractors';

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(TRACTOR_API_URL);
        const jsonData = await response.json();
        setTractors(jsonData);
      } catch (error) {
        console.error('Error fetching tractor data:', error);
      }
    }
    loadData();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const request = {
      tractors: [
        {
          tractorManufacturer: manufacturer,
          tractorMakeModel: makeModel,
          tractorYear: year,
        },
      ],
    };

    try {
      const serviceResponse = await fetch(TRACTOR_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!serviceResponse.ok) {
        console.log('Tractor submission encountered an issue');
      }

      const tractorResponse: Tractor[] = await serviceResponse.json();
      setTractors((prevTractors) => prevTractors.concat(tractorResponse)); //append the returned tractor to the existing list...

      //clear the form fields
      setManufacturer('');
      setMakeModel('');
      setYear('');
    } catch (error) {
      //log the error
      console.error('Error occured while submitting tractor data:', error);
    }
  }

  async function processDelete(id: string) {
    console.log('DELETE URL =>', TRACTOR_API_URL + `/${id}`);

    try {
      const deleteResponse = await fetch(TRACTOR_API_URL + `/${id}`, {
        method: 'DELETE',
      });

      if (!deleteResponse.ok) {
        console.error('Delete operation has failed!');
        return;
      }

      //remove the deleted tractor id from the tractors state
      setTractors((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      //log the error
      console.error('Exception caught while deleting tractor', e);
    }
  }

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>Enter your Favorite Tractor Model!</h4>

          <form onSubmit={handleSubmit} className='mt-4'>
            <div className='mb-3'>
              <label htmlFor='manufacturerInputField' className='form-label'>
                Tractor Manufacturer:
              </label>
              <input type='text' className='form-control' id='manufacturerInput' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
            </div>

            <div className='mb-3'>
              <label htmlFor='makeModelInput' className='form-label'>
                Tractor Make/Model:
              </label>
              <input type='text' className='form-control' id='makeModelInput' value={makeModel} onChange={(e) => setMakeModel(e.target.value)} required />
            </div>

            <div className='mb-3'>
              <label htmlFor='yearInput' className='form-label'>
                Year
              </label>
              <input type='text' className='form-control' id='yearInput' value={year} onChange={(e) => setYear(e.target.value)} required />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>

          <div className='container mt-5'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {tractors.map((t) => (
                  <tr key={t.id}>
                    <td>{t.tractorManufacturer}</td>
                    <td>{t.tractorMakeModel}</td>
                    <td>{t.tractorYear}</td>
                    <td>
                      <button type='button' className='btn btn-danger btn-sm' onClick={() => processDelete(t.id)}></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
