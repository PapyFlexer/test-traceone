import React from "react";

function InputButton(props) {

  const nameMap = {
    R: "RIGHT",
    L: "LEFT",
    B: "BACK",
    F: "FORWARD",
    RUN: "ADVANCE"
  };
  
  const name = nameMap[props.action];
   return (
    <button
      className="input"
      disabled={props.disabled || false}
      onClick={() => {
        props.onClick(props.action);
      }}
    >
      {name}
    </button>
  );
};

export default InputButton;
