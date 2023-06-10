"use strict";
const alternateCase = (s) => {
  //   const sSplit = s.split("");
  //   const convert = sSplit.map((t) =>
  //     t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()
  //   );
  //   console.log(convert.join(""));
  console.log(typeof s);
  console.log(
    s
      .split("")
      .map((t) => (t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()))
      .join("")
  );
};

alternateCase("ABC");
