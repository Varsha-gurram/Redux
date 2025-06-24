import React from "react";
import { useDispatch } from "react-redux";
import { multiply } from "./Redux/ActionM";

const AppMulti = ({numInput}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <button onClick={() => dispatch(multiply(numInput))}>Multiply</button>
      </center>
    </div>
  );
};

export default AppMulti;
