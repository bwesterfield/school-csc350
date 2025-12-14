import Images from '../components/Image';

export default function News() {
  return (
    <>
      <div className='card' style={{ width: '35rem' }}>
        <div className='card-body'>
          <Images img_file='../assets/farmnews.png' alt='Spraying the fields' className='img-fluid' />
          <div className='col-12 col-md-4'>
            <br />
            <div className='text-nowrap bd-highlight fw-semibold'>Active Winter Weather in the Midwest & Northeast</div>
            <hr />
          </div>
          <p className='fs-8'>
            Here’s the latest weather outlook with a focus on conditions that matter for farming, especially with winter approaching in the U.S., including trends that will influence planting,
            drought, and seasonal conditions: Recent Arctic air has driven sub-freezing temperatures across large swaths of the central and northeastern U.S., with new record cold in places like Iowa
            and New York. These events are consistent with typical La Niña winter dynamics, with cold air outbreaks and snow more frequent in northern agricultural regions.
          </p>
        </div>
      </div>
    </>
  );
}
