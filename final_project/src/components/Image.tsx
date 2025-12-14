type ImageProperties = {
  img_file: string;
  alt: string;
  className: string;
};

export default function Images({ img_file, alt, className }: ImageProperties) {
  return <img src={`/src/assets/${img_file}`} alt={alt} className={className} />;
}
