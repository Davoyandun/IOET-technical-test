const accumulatorTime = (array1, array2) => {
    let timer = 0;
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        array1[i].map((minute) => {
          if (array2[i].includes(minute)) {
            timer++;
          }
        });
      }
    }
  
    return `${Math.floor(timer / 60)}:${timer % 60 == 0 ? "00" : timer % 60}`;
  };


  const convertToMinutes = (string) => {
    let timeLampse = [];
    let indexTime = string.indexOf("-");
    let timeStart = string.slice(2, indexTime).split(":");
    timeStart = parseInt(timeStart[0]) * 60 + parseInt(timeStart[1]);
    let timeEnd = string.slice(indexTime + 1).split(":");
    timeEnd = parseInt(timeEnd[0]) * 60 + parseInt(timeEnd[1]);
  
    for (let i = timeStart; i < timeEnd; i++) {
      timeLampse.push(i);
    }
  
    return timeLampse;
  };

  module.exports = {
    accumulatorTime,
    convertToMinutes,
  };