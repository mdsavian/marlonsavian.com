import AnimatedComponent from "../AnimatedComponent";

const SubTitle = () => {
  return (
    <AnimatedComponent
      tag="span"
      className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl opacity-0"
      id="span-description"
      animationClass="animate-fade-in-up"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <br /> sed do eiusmod tempor incididunt <br />
      ut labore et dolore magna aliqua.
    </AnimatedComponent>
  );
};

export default SubTitle;
