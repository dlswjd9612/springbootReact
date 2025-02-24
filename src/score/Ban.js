// import React, { useState } from "react";

// export const Ban = () => {

//   return (
//     <div>
//       <div>
//         국어
//        
//       <div>
//         영어
//         <input
//           style={{ border: "solid" }}
//           type="text"
//           onChange={onChangeHandler}
//           value={data.eng}
//           name="eng"
//         />
//       </div>
//       <div>
//         수학
//         <input
//           style={{ border: "solid" }}
//           type="text"
//           onChange={onChangeHandler}
//           value={data.math}
//           name="math"
//         />
//       </div>
//       <div>
//         총합 <input type="number" name="total" value={data.total} readOnly />
//       </div>
//       <div>
//         평균 <input type="text" name="avg" value={data.avg} readOnly />
//       </div>
//       <div>
//         <p>
//           {data.korea},{data.eng},{data.math},{data.total},{data.avg}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Ban;

import React from "react";

export const Ban = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i, idx) => (
        <div>
          <Bun no={i} key={idx} />
        </div>
      ))}
    </div>
  );
};

export default Ban;
