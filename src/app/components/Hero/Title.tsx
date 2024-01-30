import AnimatedComponent from "../AnimatedComponent";

const Title = () => {
  return (
    <AnimatedComponent
      tag="h1"
      id="header-software-engineer"
      className="text-green text-7xl font-black max-w-[30vw] opacity-0"
      animationClass="animate-fade-in-up"
    >
      Software <br /> Engineer
    </AnimatedComponent>
  );
};

export default Title;
