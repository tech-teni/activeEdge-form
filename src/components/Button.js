import React from "react";

const Button = ({ classDiv, mainClass, Thetext }) => {
  return (
    <>
      <div className={classDiv}>
        <button className={mainClass}>{Thetext}</button>
      </div>
    </>
  );
};

export default Button;
