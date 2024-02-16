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
            In 2008, my journey as a programmer began with creating bots for the game Tibia,
            <AnimatedComponent
              tag="span"
              className="opacity-0"
              id="span-about-me-two"
              animationClass="animate-fade-in-2"
            >
              {" "}
              sparking a passion that shaped my career.
              <br /> A few years later, I started a course where
            </AnimatedComponent>
            <AnimatedComponent
              tag="span"
              className="opacity-0"
              id="span-about-me-three"
              animationClass="animate-fade-in-3"
            >
              {" "}
              I wrote my first programs, and that&#39;s when I went down the coding rabbit hole.
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
              In addition to programming, I dedicate my free time to creating content on Instagram
              and TikTok
              <AnimatedComponent
                tag="span"
                className="opacity-0"
                id="span-whats-next-two"
                animationClass="animate-fade-in-2"
              >
                {" "}
                with the goal of helping aspiring developers navigate the complexities of the job
                market.
              </AnimatedComponent>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
