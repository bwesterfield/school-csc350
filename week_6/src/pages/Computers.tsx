import PageContent from '../components/PageContent';
import Pagination from '../components/Pagination';
import Click from '../components/Click';

export default function PersonalComputers() {
  return (
    <>
      <Click />
      <PageContent
        title='The Personal Computer'
        text='(From Wikipedia) - A personal computer (PC), or simply computer, is a computer designed for personal use. It is typically used for tasks such as word processing, internet browsing, email, multimedia playback, and gaming.'
        imagePath='../assets/personalcomputer.png'
      />

      <Pagination firstEntry='/internet' secondEntry='/automobile' thirdEntry='/computers' nextEntry='/' />
    </>
  );
}
