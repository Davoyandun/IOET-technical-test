const { table } = require("console");
const fs = require("fs");
const URL =
  "C:/Users/Dell/Desktop/Nueva carpeta (2)/IOET-technical-test/src/workers.txt";
const arrayFile = fs.readFileSync(URL, "UTF-8").split("\r\n");

//Convierte el .txt en un objeto ordenado key=(Nombre de empleado), value= (array ordenada por semana)
const orderBYWeeks = (tableText) => {
  let obj = {};
  tableText.map((element) => {
    let orders = [];
    let index = element.indexOf("=");
    obj[element.slice(0, index)] = element
      .slice(index + 1)
      .split(",")
      .map((time) => {
        switch (time.slice(0, 2).toUpperCase()) {
          case "MO":
            orders[0] = convertToMinutes(time);
            break;
          case "TU":
            orders[1] = convertToMinutes(time);
            break;
          case "WE":
            orders[2] = convertToMinutes(time);
            break;
          case "TH":
            orders[3] = convertToMinutes(time);
            break;
          case "FR":
            orders[4] = convertToMinutes(time);
            break;
          case "SA":
            orders[5] = convertToMinutes(time);
            break;
          case "SU":
            orders[6] = convertToMinutes(time);
            break;
          default:
            [0];
        }
        return orders;
      })[0];
  });
  return obj;
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

let ObjSchedule = orderBYWeeks(arrayFile);

const tableGroups = (schedule) => {
 
  let coworkers = {};

  let keys = Object.keys(schedule);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      coworkers[`${keys[i]} - ${keys[j]} `]
    }
  }
  console.log(coworkers);
};



tableGroups(ObjSchedule);

// exports
module.exports = {
  orderBYWeeks,
  convertToMinutes,
};
