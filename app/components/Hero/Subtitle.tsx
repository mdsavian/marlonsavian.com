import AnimatedComponent from "../AnimatedComponent";

const SubTitle = () => {
  return (
    <AnimatedComponent
      tag="span"
      className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl opacity-0"
      id="span-description"
      animationClass="animate-fade-in-up"
    >
      I&#39;m a software engineer who likes to craft solid
      <br /> and scalable products, always thinking about creating
      <br />
      an exceptional user experience.
    </AnimatedComponent>
  );
};

export default SubTitle;
