import AnimatedComponent from "../AnimatedComponent";

const Title = () => {
  return (
    <AnimatedComponent
      tag="h1"
      id="header-software-engineer"
      className="text-green text-5xl md:text-6xl font-bold text-center opacity-0"
      animationClass="animate-fade-in-up"
    >
      Marlon Savian
    </AnimatedComponent>
  );
};

export default Title;
