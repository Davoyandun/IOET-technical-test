import { orderList, startEnd } from "../src";

describe("Comprobar que la tabla esta ordenada", () => {
  test("La tabla esta ordenada por semanas", () => {
    expect(
      orderList(["ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15"])
    ).toStrictEqual([{"ESTHER": [, " 10:00 , 18:00 ", " 20:00 , 22:00 ", " 16:00 , 20:15 "]}]);
  });
});
