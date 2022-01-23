import { orderBYWeeks, startEnd } from "../src";

describe("Ordenamiento de tabla por dia de la semana", () => {
  test("La tabla ordena correctamente segun dia de la semana", () => {
    expect(
      orderBYWeeks(["ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15"])
    ).toStrictEqual([
      {
        ESTHER: [, " 600 ,1080 ", " 1200 ,1320 ", " 960 ,1215 "],
      },
    ]);
  });

  test("La tabla deja espacios vacios cuando un dia entre semana no asistio el trabajador", () => {
    expect(
      orderBYWeeks([
        "DAVID=MO10:15-12:00,TH13:00-15:00,SA08:15-09:00,SU13:00-15:00",
      ])
    ).toStrictEqual([
      {
        DAVID: [" 615 ,720 ", , , " 780 ,900 ", , " 495 ,540 ", " 780 ,900 "],
      },
    ]);
  });

  test("La tabla ordena multiples trabajadores", () => {
    expect(
      orderBYWeeks([
        "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
        "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
        "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
        "DAVID=MO10:15-12:00,TH13:00-15:00,SA08:15-09:00,SU13:00-15:00",
        "ESTHER=TU10:00-18:00,WE20:00-22:00,TH16:00-20:15",
      ])
    ).toStrictEqual([
      {
        RENE: [
          " 600 ,720 ",
          " 600 ,720 ",
          ,
          " 60 ,180 ",
          ,
          " 840 ,1080 ",
          " 1200 ,1260 ",
        ],
      },
      {
        ASTRID: [" 600 ,720 ", , , " 720 ,840 ", , , " 1200 ,1260 "],
      },
      {
        ANDRES: [" 600 ,720 ", , , " 720 ,840 ", , , " 1200 ,1260 "],
      },
      {
        DAVID: [" 615 ,720 ", , , " 780 ,900 ", , " 495 ,540 ", " 780 ,900 "],
      },
      {
        ESTHER: [, " 600 ,1080 ", " 1200 ,1320 ", " 960 ,1215 "],
      },
    ]);
  });
});
