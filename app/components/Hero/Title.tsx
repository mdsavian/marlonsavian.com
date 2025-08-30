import AnimatedComponent from "../AnimatedComponent";

const Title = () => {
  return (
    <AnimatedComponent
      tag="h1"
      id="header-software-engineer"
      className="text-green text-6xl md:text-7xl font-black text-center opacity-0"
      animationClass="animate-fade-in-up"
    >
      Marlon <br /> Savian
    </AnimatedComponent>
  );
};

export default Title;
