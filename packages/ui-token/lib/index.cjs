var y = Object.defineProperty;
var e = Object.getOwnPropertyDescriptor;
var t = Object.getOwnPropertyNames;
var A = Object.prototype.hasOwnProperty;
var l = (o, r) => {
    for (var g in r) y(o, g, { get: r[g], enumerable: !0 });
  },
  B = (o, r, g, E) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let a of t(r))
        !A.call(o, a) &&
          a !== g &&
          y(o, a, {
            get: () => r[a],
            enumerable: !(E = e(r, a)) || E.enumerable,
          });
    return o;
  };
var f = (o) => B(y({}, "__esModule", { value: !0 }), o);
var p = {};
l(p, { colors: () => D });
module.exports = f(p);
var D = {};
l(D, { darkToken: () => k, lightToken: () => n });
var n = {
    gray200: "#EAEBEE",
    gray300: "#DCDEE3",
    gray400: "#D1D3D8",
    gray500: "#ADB1BA",
    gray600: "#868B94",
    gray700: "#4D5159",
    gray900: "#212124",
  },
  k = {
    gray200: "#212124",
    gray300: "#4D5159",
    gray400: "#868B94",
    gray500: "#ADB1BA",
    gray600: "#D1D3D8",
    gray700: "#DCDEE3",
    gray900: "#EAEBEE",
  };
0 && (module.exports = { colors });
