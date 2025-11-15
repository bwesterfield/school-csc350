import './App.css';
import Image from './components/Image';

function App() {
  return (
    <>
      <h2>Scooby Doo</h2>
      <div className='img-grid'>
        <Image img_file={'fred.jpg'} width='200px' />
        <Image img_file={'scooby.jpg'} width='200px' />
        <Image img_file={'shaggy.jpg'} width='200px' />
        <Image img_file={'velma.jpg'} width='200px' />
      </div>
    </>
  );
}
export default App;
