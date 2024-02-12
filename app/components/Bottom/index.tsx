const Bottom = () => {
  return (
    <section className="flex flex-col sm:items-center justify-center bg-blue py-32 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-col py-0 px-16 sm:px-40 justify-between w-full max-w-screen-2xl 2xl:max-w-[1700px]">
        <div className="flex flex-col text-left relative">
          <h1 className="text-green text-7xl font-black sm:max-w-[30vw] max-w-full">
            Get In Touch
          </h1>

          <span className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Although I’m not currently looking for any new opportunities, my inbox is always open.
            <br />
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </span>
          <a href="#_" className="relative px-6 py-3 font-bold text-black group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">Button Text</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
