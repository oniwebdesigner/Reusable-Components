//Reusable Hero Section
import HeroSection from "./HeroSection";

const Page = () => {
  return (
    <HeroSection
      title="Photography is the art of capturing moments that tell stories without words."
      description="Through the lens, we preserve the beauty of fleeting moments and transform them into timeless memories. Each photograph is a window into a unique world, capturing the essence of our experiences and emotions. Explore our gallery and discover the stories behind every shot."
      link="/contact"
      buttonText="Get Started"
      bgClass="linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
    />
  );
};

export default Page;
