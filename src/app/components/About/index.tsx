const AboutMe = () => {
  return (
    <section className="flex flex-col sm:items-center justify-center bg-blueLight py-40 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-col py-0 px-16 sm:px-40 justify-between w-full max-w-screen-2xl2xl:max-w-[1700px]">
        <div className="flex flex-col text-left relative">
          <h1 className="text-blue text-7xl font-black max-w-[30vw]">About me</h1>
          <span className="text-purple mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className="mt-16 flex justify-end relative text-left">
          <div className="flex flex-col">
            <h1 className="text-blue text-7xl font-black max-w-[30vw]">Whats next</h1>
            <span className="text-purple mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
