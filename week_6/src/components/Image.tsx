type ImageProperties = {
  img_file: string;
};

export default function Image({ img_file }: ImageProperties) {
  return <img src={`/src/assets/${img_file}`} alt='image' className='img-fluid rounded shadow-sm' />;
}
