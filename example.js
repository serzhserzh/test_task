// условие
// входной список имеет вид массива массивов
// доступны 5 видов градусов  0, 90, 180, 270, 360

const res = [[0, 0]];
let x = 0;
let y = 0;
function next(arg) {
  arg.map((item) => {
    item[0] = item[0] / 10;
  });
  for (let i = 0; i < arg.length; i++) {
    switch (arg[i][1]) {
      case 0:
        x -= arg[i][0];
        if (x < 0) {
          minusX();
          x = 0;
          res.push([x, y]);
        } else {
          res.push([x, y]);
        }
        break;
      case 90:
        y += arg[i][0];
        if (y > 0) {
          minusY();
          y = 0;
          res.push([x, y]);
        } else {
          res.push([x, y]);
        }
        break;
      case 180:
        x += arg[i][0];
        res.push([x, y]);
        break;
      case 270:
        y -= arg[i][0];
        res.push([x, y]);
        break;
      case 360:
        x += arg[i][0];
        res.push([x, y]);
        break;
      default:
    }
  }
  const _res = res
    .map((item) => {
      item[1] = Math.abs(item[1]);
      return item.join(" ");
      console.log(item);
    })
    .join(" ");

  return _res;
}
function minusX() {
  for (i = 0; i < res.length; i++) {
    res[i][0] += Math.abs(x);
  }
}
function minusY() {
  for (i = 0; i < res.length; i++) {
    res[i][1] -= Math.abs(y);
  }
}
console.log(
  next([
    [1665, 0],
    [947, 90],
    [557, 0],
    [1300, 90],
    [2225, 180],
    [2239, 270],
  ])
);
