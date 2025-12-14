import Images from '../components/Image';

export default function Home() {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>What you wanted to be growing up?</h4>
          <p className='card-text'>
            Growing up I wanted to be a <b>farmer</b>. I always thought that famers worked really hard and I really admired that. Plus - I think tractors are really cool!
          </p>
          <div className='container text-center my-4'>
            <div className='row g-3'>
              <div className='col-12 col-md-4'>
                <Images img_file='../assets/spraying.png' alt='Spraying the fields' className='img-fluid rounded equal-img' />
                <p className='mt-2 fw-semibold'>Spraying the fields</p>
              </div>
              <div className='col-12 col-md-4'>
                <Images img_file='../assets/plowing.png' alt='Tending to the Crops' className='img-fluid rounded equal-img' />
                <p className='mt-2 fw-semibold'>Tending to the Crops</p>
              </div>
              <div className='col-12 col-md-4'>
                <Images img_file='../assets/combine.png' alt='Time to harvest!' className='img-fluid rounded equal-img' />
                <p className='mt-2 fw-semibold'>Time to harvest!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
