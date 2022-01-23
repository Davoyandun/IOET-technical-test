const { orderBYWeeks, workTableTogether } = require("../src");
const { accumulatorTime, convertToMinutes } = require("../src/utils");
const fs = require("fs");
const URL =
  "C:/Users/Dell/Desktop/Nueva carpeta (2)/IOET-technical-test/src/workers.txt";
const arrayFile = fs.readFileSync(URL, "UTF-8").split("\r\n");

let array1 = [
  [
    615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629,
    630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644,
    645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659,
    660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674,
    675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689,
    690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704,
    705, 706, 707, 708, 709, 710, 711, 712,
  ],
  [],
];
let array2 = [
  [
    615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629,
    630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644,
    645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659,
    660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674,
    675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689,
    690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704,
    705, 706, 707, 708, 709, 710, 711, 712,
  ],
  [],
];

describe("Sort multiple strings into an object with an array sorted by day of the week", () => {
  let obj = orderBYWeeks([
    "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
    "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
    "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
    "DAVID=MO10:15-12:00,TH13:00-15:00,SA08:15-09:00,SU13:00-15:00",
    "ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15",
  ]);
  obj.ESTHER[1].length;
  test("Correctly saves the number of minutes", () => {
    expect(obj.ESTHER[1].length).toStrictEqual(480);
  });

  test("The table leaves empty spaces when the worker did not attend on a working day", () => {
    expect(obj.ESTHER[0]).toStrictEqual(undefined);
  });

  test("The table sorts multiple workers", () => {
    expect(Object.keys(obj)).toStrictEqual([
      "RENE",
      "ASTRID",
      "ANDRES",
      "DAVID",
      "ESTHER",
    ]);
  });
});
describe("Convert a string to an array with minutes", () => {
  let timelapse = convertToMinutes("MO10:15-12:00");

  test("Convert string to array ", () => {
    expect(Array.isArray(timelapse)).toBe(true);
  });
  test("Contains the right amount of elements", () => {
    expect(timelapse.length).toBe(105);
  });
});

describe("Compare 2 arrays and get the time in hours and minutes", () => {
  let weeksInOrder = orderBYWeeks(arrayFile);
  let finalTable = workTableTogether(weeksInOrder)

  test(" establishes the time they worked together ", () => {
    expect(accumulatorTime(array1, array2)).toBe("1:38");
  });

  test(" Create a table with all possible combinations ", () => {
    expect(finalTable).toStrictEqual({
      'RENE - ASTRID ': '3:00',
      'RENE - ANDRES ': '3:00',
      'RENE - DAVID ': '1:45',
      'RENE - ESTHER ': '2:00',
      'ASTRID - ANDRES ': '5:00',
      'ASTRID - DAVID ': '2:45',
      'ASTRID - ESTHER ': '0:00',
      'ANDRES - DAVID ': '2:45',
      'ANDRES - ESTHER ': '0:00',
      'DAVID - ESTHER ': '1:00'
    });
  });
});
