import React from "react";
import JuheonRed from "./JuheonRed";

const Yunjae = () => {
  return (
    <div>
      {[
        { fn: (i) => console.log(i + "사랑") },
        { fn: (i) => console.log(i + "증오") },
        { fn: (i) => console.log(i + "갈증") },
        { fn: (i) => console.log(i + "믿음") },
        { fn: (i) => console.log(i + "폭발") },
      ].map((i, idx) => (
        <JuheonRed key={idx} vv={idx} idx={idx} />
      ))}
    </div>
  );
};

export default Yunjae;
