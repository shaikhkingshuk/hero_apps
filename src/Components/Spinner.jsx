import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
      <img
        src="/images/logo.png"
        alt="spinning"
        className="w-24 h-24 object-contain animate-spin"
      />
    </div>
  );
};

export default Spinner;
