import AnimatedComponent from "../AnimatedComponent";

const SubTitle = () => {
  return (
    <AnimatedComponent
      tag="p"
      className="text-white text-xl md:text-2xl max-w-2xl text-center leading-relaxed opacity-0"
      id="span-description"
      animationClass="animate-fade-in-up"
    >
      I&#39;m a software engineer who likes to craft solid and scalable products, always thinking about creating an exceptional user experience.
    </AnimatedComponent>
  );
};

export default SubTitle;
