import React from "react";
import CustomButton from "./components/CustomButton";
//import ParallaxComponent from "./components/ParallaxScene";

export default function Page() {
  const images = [
    "https://assets.codepen.io/721952/sky.jpg",
    "https://assets.codepen.io/721952/mountBg.png",
    "https://assets.codepen.io/721952/mountMg.png",
    "https://assets.codepen.io/721952/cloud2.png",
    "https://assets.codepen.io/721952/mountFg.png",
    "https://assets.codepen.io/721952/cloud1.png",
    "https://assets.codepen.io/721952/cloud3.png"
  ];

  return (
    <div>
      <CustomButton href="#">Button</CustomButton>
      {/* <ParallaxComponent images={images} text="Explore the Mountains!" /> */}
    </div>
  );
}
