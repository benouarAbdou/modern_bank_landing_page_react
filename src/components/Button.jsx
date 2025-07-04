import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins  font-medium  text-primary outline-none rounded-[20px] ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
