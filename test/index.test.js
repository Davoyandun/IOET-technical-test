import { orderList, startEnd } from "../src";


describe("Ordenamiento de tabla por dia de la semana", () => {
  test("La tabla ordena correctamente segun dia de la semana", () => {
    expect(
      orderList(["ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15"])
    ).toStrictEqual([
      { ESTHER: [, " 10:00 , 18:00 ", " 20:00 , 22:00 ", " 16:00 , 20:15 "] },
    ]);
  });

  test("La tabla deja espacios vacios cuando un dia entre semana no asistio el trabajador", () => {
    expect(
      orderList([
        "DAVID=MO10:15-12:00,TH13:00-15:00,SA08:15-09:00,SU13:00-15:00",
      ])
    ).toStrictEqual([
      {
        DAVID: [
          " 10:15 , 12:00 ",
          ,
          ,
          " 13:00 , 15:00 ",
          ,
          " 08:15 , 09:00 ",
          " 13:00 , 15:00 ",
        ],
      },
    ]);
  });

  test("La tabla ordena multiples trabajadores", () => {
    expect(
      orderList([
        "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
        "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
        "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
        "DAVID=MO10:15-12:00,TH13:00-15:00,SA08:15-09:00,SU13:00-15:00",
        "ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15",
      ])
    ).toStrictEqual([
      {
        RENE: [
          " 10:00 , 12:00 ",
          " 10:00 , 12:00 ",
          ,
          " 01:00 , 03:00 ",
          ,
          " 14:00 , 18:00 ",
          " 20:00 , 21:00 ",
        ],
      },
      {
        ASTRID: [
          " 10:00 , 12:00 ",
          ,
          ,
          " 12:00 , 14:00 ",
          ,
          ,
          " 20:00 , 21:00 ",
        ],
      },
      {
        ANDRES: [
          " 10:00 , 12:00 ",
          ,
          ,
          " 12:00 , 14:00 ",
          ,
          ,
          " 20:00 , 21:00 ",
        ],
      },
      {
        DAVID: [
          " 10:15 , 12:00 ",
          ,
          ,
          " 13:00 , 15:00 ",
          ,
          " 08:15 , 09:00 ",
          " 13:00 , 15:00 ",
        ],
      },
      {
        ESTHER: [, " 10:00 , 18:00 ", " 20:00 , 22:00 ", " 16:00 , 20:15 "],
      },
    ]);
  });
});
