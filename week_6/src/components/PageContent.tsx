import Image from './Image';

type ContentProperties = {
  title: string;
  text: string;
  imagePath: string;
};

export default function PageContent({ title, text, imagePath }: ContentProperties) {
  return (
    <>
      <div className='container my-4'>
        <div className='row align-items-center'>
          {/* Left Column – Image */}
          <div className='col-md-6 mb-3 mb-md-0'>
            <Image img_file={imagePath} />
          </div>

          {/* Right Column – Text */}
          <div className='col-md-6'>
            <h2 className='mb-3'>{title}</h2>
            <p className='lead'>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
