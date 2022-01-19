// Inicio

let array = []
var req = new XMLHttpRequest();
let fire = "workers.txt";
req.open("GET", fire, false);
req.send(null);
let txt = req.responseText.split("\r\n");

let scheduleTable = txt.map((element) => {
  let index = element.indexOf("=");
  return (obj = {
    [element.slice(0, index)]: element
      .slice(index + 1)
      .split(",")
      // .map((element, index) => {

   

      //   switch (element.slice(0, 2).toUpperCase()) {
      //     case "MO":
      // array[0]=  element.slice(2);
      //       break;
      //     case "TU":
      //         array[1]= element.slice(2);
      //       break;

      //     case "WE":
      //        array[2]=  element.slice(2);
      //       break;
      //     case "TH":
      //       array[3]= element.slice(2);
      //       break;
      //     case "FR":
      //         array[4]= element.slice(2);
      //       break;
      //     case "SA":
      //        array[5]= element.slice(2);
      //       break;
      //     case "SU":
      //         array[6]=  element.slice(2);
      //       break;
      //     default:
      //       [];
      //        return array
      //   }

      // }),
  });
});

let horarios = (obj) => {
  obj.map((worker, index) => {
    for (let value in worker) {
      console.log(worker[value].slice(1, 2));
    
    }
  });
};
horarios(scheduleTable);

console.log("Tabla", scheduleTable);
console.log(array);
