"use client";

import { TailSpin } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="grid place-items-center">
      <TailSpin
        height="80"
        width="80"
        color="#EE4B2B"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingScreen;
