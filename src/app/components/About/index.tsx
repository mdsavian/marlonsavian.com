import AnimatedComponent from "../AnimatedComponent";

const AboutMe = () => {
  return (
    <section className="flex flex-col sm:items-center justify-center bg-blueLight py-40 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-col py-0 px-16 sm:px-40 justify-between w-full max-w-screen-2xl 2xl:max-w-[1700px]">
        <div className="flex flex-col text-left relative">
          <AnimatedComponent
            tag="h1"
            id="header-about-me"
            animationClass="animate-fade-in-up"
            className="text-blue text-7xl font-black sm:max-w-[30vw] max-w-full opacity-0"
          >
            About me
          </AnimatedComponent>

          <AnimatedComponent
            tag="span"
            className="text-purple mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl opacity-0"
            id="span-about-me-one"
            animationClass="animate-fade-in-1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <AnimatedComponent
              tag="span"
              className="opacity-0"
              id="span-about-me-two"
              animationClass="animate-fade-in-2"
            >
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            </AnimatedComponent>
            <AnimatedComponent
              tag="span"
              className="opacity-0"
              id="span-about-me-three"
              animationClass="animate-fade-in-3"
            >
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AnimatedComponent>
          </AnimatedComponent>
        </div>

        <div className="mt-16 flex justify-end relative text-left">
          <div className="flex flex-col">
            <AnimatedComponent
              tag="h1"
              id="header-whats-next"
              className="text-blue text-7xl font-black sm:max-w-[30vw] max-w-full opacity-0"
              animationClass="animate-fade-in-up"
            >
              Whats next
            </AnimatedComponent>

            <AnimatedComponent
              tag="span"
              className="text-purple mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl opacity-0"
              id="span-whats-next-one"
              animationClass="animate-fade-in-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <AnimatedComponent
                tag="span"
                className="opacity-0"
                id="span-whats-next-two"
                animationClass="animate-fade-in-2"
              >
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              </AnimatedComponent>
              <AnimatedComponent
                tag="span"
                className="opacity-0"
                id="span-whats-next-three"
                animationClass="animate-fade-in-3"
              >
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AnimatedComponent>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
