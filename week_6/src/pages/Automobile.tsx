import PageContent from '../components/PageContent';
import Pagination from '../components/Pagination';
import Click from '../components/Click';

export default function Automobile() {
  return (
    <>
      <Click />
      <PageContent
        title='The Automobile'
        text='(From Wikipedia) - The automobile, or car is a motor vehicle with wheels.  Most definitions of cars state that they run primarily on roads and can seat 1 to 8 people, have four wheels and mainly transport people rather then cargo.  There are around 1.644 billion cars in use worldwide as of January 2025.'
        imagePath='../assets/car.png'
      />

      <Pagination firstEntry='/internet' secondEntry='/automobile' thirdEntry='/computers' nextEntry='/computers' />
    </>
  );
}
