export default function Image({ src, alt }) {
  return <img src={`src/assets/images/${src}`} alt={alt} className='img-dogs' />;
}
