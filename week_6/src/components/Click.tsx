import { useEffect, useRef } from 'react';
import clickSound from '../assets/mouseClick.mp3';

export default function ClickSound() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  return <audio ref={audioRef} src={clickSound} />;
}
