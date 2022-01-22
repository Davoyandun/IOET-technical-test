// var fs = require("fs");
// var arrayFile = fs.readFileSync('./workers.txt', 'UTF-8').split("\r\n")

// table ordering in weeks
export const orderList  = (table) => {
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
    return obj
  });
 
};

export const startEnd = (string) => {
  let index = string.indexOf("-");

  return ` ${string.slice(2, index)} , ${string.slice(index + 1)} ` 
};

let finalTable = orderList(["ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15"])

 console.log(finalTable )



 // 


