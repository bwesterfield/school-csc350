import PageContent from '../components/PageContent';
import Pagination from '../components/Pagination';
import Click from '../components/Click';

export default function Home() {
  return (
    <>
      <Click />

      <PageContent title='Top Inventions of the Last 100 years' text='Described in the listed pages above are a few of the best inventions of the last 100 years' imagePath='../assets/idea.png' />

      <Pagination firstEntry='/internet' secondEntry='/automobile' thirdEntry='/computers' nextEntry='/internet' />
    </>
  );
}
