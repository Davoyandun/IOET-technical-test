const fs = require("fs");
const URL = "C:/Users/Dell/Desktop/Nueva carpeta (2)/IOET-technical-test/src/workers.txt"
const arrayFile = fs.readFileSync(URL, "UTF-8").split("\r\n");

//table ordering in weeks
const orderList = (table) => {
  return table.map((element) => {
    let orders = [];
    let index = element.indexOf("=");
    let obj = {
      [element.slice(0, index)]: element
        .slice(index + 1)
        .split(",")
        .map((time) => {
          switch (time.slice(0, 2).toUpperCase()) {
            case "MO":
              orders[0] = startEnd(time);
              break;
            case "TU":
              orders[1] = startEnd(time);
              break;
            case "WE":
              orders[2] = startEnd(time);
              break;
            case "TH":
              orders[3] = startEnd(time);
              break;
            case "FR":
              orders[4] = startEnd(time);
              break;
            case "SA":
              orders[5] = startEnd(time);
              break;
            case "SU":
              orders[6] = startEnd(time);
              break;
            default:
              [0];
          }
          return orders;
        })[0],
    };
    return obj;
  });
};

const startEnd = (string) => {
  let index = string.indexOf("-");

  return ` ${string.slice(2, index)} , ${string.slice(index + 1)} `;
};

let orderTable = orderList(arrayFile);









// exports
module.exports = {
  orderList,
  startEnd,
};
