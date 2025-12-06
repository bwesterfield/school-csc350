import PageContent from '../components/PageContent';
import Pagination from '../components/Pagination';
import Click from '../components/Click';

export default function Internet() {
  return (
    <>
      <Click />
      <PageContent
        title='The Internet'
        text='(From Wikipedia) - Developed in the 1960s, The Internet is a global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to commmunicate between networks and devices'
        imagePath='../assets/internet.png'
      />

      <Pagination firstEntry='/internet' secondEntry='/automobile' thirdEntry='/computers' nextEntry='/automobile' />
    </>
  );
}
