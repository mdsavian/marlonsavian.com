const About: React.FC = () => {
  return (
    <section className="md:bg-about bg-blue pb-32 w-full">
      <div className="flex flex-col mt-32 md:mt-40 lg:mt-48 max-w-screen-2xl py-0 md:px-24 lg:px-32 px-[12vw]">
        <h1 className="text-green text-5xl md:text-6xl lg:text-7xl font-black text-left max-w-[30vw]">
          Fullstack Developer
        </h1>
        <span className="text-white lg:w-2/5 md:w-4/6 w-full mt-8 md:text-1xl text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </span>

        {/* <figure className="w-[34rem] h-[24rem] bg-white">

        </figure> */}

      </div>
        <div className="text-green mt-16 max-w-screen-2xl py-0 md:px-24 lg:px-32 px-[12vw]">
          <ul className="flex text-sm lg:w-2/5 md:w-4/6 w-full">
            <li className=" mr-3">
              Highly skilled at progressive enhancement, design systems &amp; UI Engineering.
            </li>
            <li>
              Over a decade of experience building products for clients across several countries.
            </li>
          </ul>
        </div>
    </section>
  );
};

export default About;
