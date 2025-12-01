import { useState, useEffect } from 'react';
import Image from './components/Image';
import './App.css';
import { playSound } from './utils/sound';
import { saveValue, getValue, getImageIndex, saveIndexValue, saveRoundValue, getRoundValue } from './utils/saveUtilities';

function App() {
  const images = ['dog1.png', 'dog2.png', 'dog3.png'];
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1); //initalize the round value at 1 instead of zero
  const [position, setPosition] = useState({ top: '70%', left: '0%' });
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    saveRoundValue(null); // trigger the round value to

    const interval = setInterval(() => {
      let top = Math.floor(Math.random() * 5) + 70 + '%';
      let left = Math.floor(Math.random() * 10) + 10;

      //save positional value
      saveValue(left);
      left = getValue() + '%';

      //save random image value
      let isImageReset = false;
      let imageIndex = parseInt(getImageIndex());
      if (imageIndex === 99 || imageIndex === null) {
        imageIndex = Math.floor(Math.random() * images.length); //99 indicates that we need to generate another image
        saveIndexValue(imageIndex);
        isImageReset = true;
      }

      //save the round - only increment when position/image resets
      if (isImageReset) {
        let round = parseInt(getRoundValue());
        if (round === -1 || round === null || isNaN(round)) {
          round = 1;
        } else {
          round = round + 1;
        }
        saveRoundValue(round);
        setRound(round); //only change the state when we reset the image
      }

      //set the state values
      setPosition({ top, left });
      setCurrentImage(images[imageIndex]);
      playSound();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setScore(score + 1);
    playSound();
  };

  return (
    <div className='container'>
      <h1>Score: {score}</h1>
      <h2>Round: {round}</h2>
      <span className='dog' style={{ top: position.top, left: position.left }} onClick={handleClick}>
        <Image src={currentImage} alt={'running dog'} />
      </span>
    </div>
  );
}
export default App;
