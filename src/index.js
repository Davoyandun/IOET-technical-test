const { accumulatorTime, convertToMinutes } = require("./utils");
const fs = require("fs");
const URL =
  "C:/Users/Dell/Desktop/Nueva carpeta (2)/IOET-technical-test/src/workers.txt";
const arrayFile = fs.readFileSync(URL, "UTF-8").split("\r\n");

//Convierte el .txt en un objeto ordenado key=(Nombre de empleado), value= (array ordenada por semana)

const orderBYWeeks = (tableText) => {
  const ACMEemployees = {};
  tableText.map((element) => {
    let orders = [];
    let index = element.indexOf("=");
    ACMEemployees[element.slice(0, index)] = element
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
  return ACMEemployees;
};
const ObjSchedule = orderBYWeeks(arrayFile);

const workTableTogether = (schedule) => {
  let coworkers = {};

  let keys = Object.keys(schedule);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (keys[i] && keys[j]) {
        coworkers[`${keys[i]} - ${keys[j]} `] = accumulatorTime(
          schedule[keys[i]],
          schedule[keys[j]]
        );
      }
    }
  }
  return coworkers;
};

//const employeeTable= workTableTogether(ObjSchedule)
//console.table(employeeTable);

// exports
module.exports = {
  orderBYWeeks,
  workTableTogether,
};
