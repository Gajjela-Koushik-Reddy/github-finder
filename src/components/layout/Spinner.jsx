import spinner from "./assets/loading.gif";
import React from "react";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
