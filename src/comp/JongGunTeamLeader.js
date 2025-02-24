import React, { useState } from "react";

const JongGunTeamLeader = () => {
  const [data, setData] = useState({ math: 0, eng: 0 });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.targetname]: e.target.value });
  };

  return (
    <div>
      <div>
        수학
        <input
          style={{ border: "solid" }}
          type="text"
          onChange={onChangeHandler}
          value={data.math}
          name="math"
        />
      </div>
      <div>
        영어
        <input
          style={{ border: "solid" }}
          type="text"
          onChange={onChangeHandler}
          value={data.eng}
          name="eng"
        />
      </div>
      <p>
        {data.math},{data.eng}
      </p>
    </div>
  );
};

export default JongGunTeamLeader;
