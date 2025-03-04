"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  if (!animationPath) return <p>Loading animation...</p>;

  return <Lottie animationData={animationPath} loop autoplay style={{ width: width || "95%" }} />;
};

export default AnimationLottie;
