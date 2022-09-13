import React from "react";

const Button = ({ text, css }) => {
  return <button className={`${css} rounded-[10px] py-2 px-6`}>{text}</button>;
};

export default Button;
