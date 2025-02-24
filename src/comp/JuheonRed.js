import React from "react";

// const JuheonRed = ({ vv, key }) => {
//   return <div>JuheonRed : {vv}</div>;
// };
const JuheonRed = ({ vv, idx }) => {
  //   console.log(key);
  return (
    <div>
      <button onClick={() => console.log("갈증")}> 눌러 !,{idx} </button>
    </div>
  );
};

export default JuheonRed;
