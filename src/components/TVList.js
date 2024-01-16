import React from "react";
import { useParams } from "react-router-dom";

const TVList = () => {
  const { resId } = useParams();
  // console.log(resId);
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

export default TVList;
