export const saveValue = (value) => {
  let curr = 1;
  if (localStorage.getItem('saveValue') != undefined) {
    curr = parseInt(localStorage.getItem('saveValue'));
  }

  if (value + curr < 99) {
    value += curr;
  } else {
    value = 1;
    localStorage.setItem('saveImageIndex', 99); //indicate a new random image is needed
  }

  localStorage.setItem('saveValue', value);
};

export const saveIndexValue = (value) => {
  localStorage.setItem('saveImageIndex', value);
};

export const saveRoundValue = (value) => {
  localStorage.setItem('saveRoundValue', value);
};

export const getValue = () => {
  return localStorage.getItem('saveValue');
};

export const getImageIndex = () => {
  return localStorage.getItem('saveImageIndex');
};

export const getRoundValue = () => {
  return localStorage.getItem('saveRoundValue');
};
