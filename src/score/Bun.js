import React, { useState } from "react";
import Ban from "../score/Ban";

const Bun = ({ no }) => {
  const [data, setData] = useState({
    korea: 0,
    eng: 0,
    math: 0,
    total: 0,
    avg: 0,
    grade: "",
  });

  const onChangeHandler = (e) => {
    const newData = { ...data, [e.target.name]: e.target.vlaue };
    const total = data.korea + data.math + data.eng;
    const avg = total / 3;
    const grade = (i) => {};

    setData({ ...newData, total, avg, grade });
  };

  return (
    <div>
      <h1>{no}번 학생</h1>
      <form>
        <div>
          <label> 국어 </label>
          <input
            style={{ border: "solid" }}
            type="text"
            onChange={onChangeHandler}
            value={data.korea}
            name="korea"
          />
        </div>
        <div>
          <label> 영어 </label>
          <input
            style={{ border: "solid" }}
            type="text"
            onChange={onChangeHandler}
            value={data.eng}
            name="eng"
          />
        </div>
        <div>
          <label> 수학 </label>
          <input
            style={{ border: "solid" }}
            type="text"
            onChange={onChangeHandler}
            value={data.math}
            name="math"
          />
        </div>
        <div>
          <label> 총점 </label>
          <input type="number" name="total" value={data.total} readOnly />
        </div>
        <div>
          <label> 평균 </label>
          <input type="number" name="avg" value={data.avg} readOnly />
        </div>
        <div>
          <label> 등급 </label>
          <input type="number" name="grade" value={data.grade} readOnly />
        </div>
        <button type="submit" name="등록" />
      </form>
    </div>
  );
};

export default Bun;
