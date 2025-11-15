export default function Image({ img_file, width }) {
  return <img src={`/src/assets/${img_file}`} width={width} />;
}
