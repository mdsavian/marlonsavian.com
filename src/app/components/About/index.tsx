const About: React.FC = () => {
  return (
    <section className="md:bg-about bg-blue pb-32">
      <div className="flex flex-col mt-32 md:mt-40 lg:mt-48 max-w-screen-2xl py-0 md:px-24 lg:px-32 px-[12vw]">
        <h1 className="text-green text-5xl md:text-6xl lg:text-7xl font-black text-left max-w-[30vw]">
          Fullstack Developer
        </h1>
        <span className="text-white max-w-md mt-8 md:text-1xl text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </span>

        <div className="text-green max-w-md mt-16">
          <ul className="flex text-sm">
            <li className="mr-2">
              Highly skilled at progressive enhancement, design systems &amp; UI Engineering.
            </li>
            <li className="w-[calc(50% - 2rem)]">
              Over a decade of experience building products for clients across several countries.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
