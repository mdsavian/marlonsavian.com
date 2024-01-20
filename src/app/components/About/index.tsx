import AvatarShapes from "@/assets/avatar-shapes.svg";
const About: React.FC = () => {
  return (
    <section className="sm:bg-about bg-blue pb-32 w-full relative">
      <div className="flex flex-row items-center mt-48 max-w-screen-2xl py-0 px-[12vw]">
        <div className="flex flex-col text-left relative">
          <h1 className="text-green text-7xl font-black max-w-[30vw]">Fullstack Developer</h1>
          <span className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <figure className="w-[23rem] h-[24rem] relative border-[0.115rem] border-solid border-white ">
          {/* <AvatarShapes /> */}
        </figure>
      </div>
      <div className="text-green max-w-screen-2xl py-0 px-[12vw] mt-12">
        <ul className="flex md:text-lg sm:w-4/6 md:w-3/6 text-2xl xs:text-2xl ">
          <li className="mr-3">
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
