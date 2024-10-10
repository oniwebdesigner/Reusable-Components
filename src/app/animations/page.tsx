import ParallaxComponent from "./ParallaxScene";

const MyPage = () => {
  return (
    <ParallaxComponent
      triggerClass="scrollDist"
      skyClass=".sky"
      cloudClasses={['.cloud1', '.cloud2', '.cloud3']}
      mountClasses={['.mountBg', '.mountMg', '.mountFg']}
      arrowBtnId="arrow-btn"
    />
  );
};

export default MyPage;
