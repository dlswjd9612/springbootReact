import React from "react";

const HyuckBin = ({ fu, vu }) => {
  return (
    <div>
      HyuckBin
      <button
        onClick={() => {
          console.log(fu(5) + vu(9, { a: [1, 2, 3, 4] }));
        }}
      >
        눌러 !
      </button>
    </div>
  );
};

export default HyuckBin;
