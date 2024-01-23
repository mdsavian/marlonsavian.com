import Photo from "./Photo";

const About: React.FC = () => {
  return (
    <section className="sm:bg-about bg-blue pb-12 md:pb-32 w-full relative">
      <div className="flex flex-row items-center mt-52 py-0 px-[12vw] px-16 justify-between">
        <div className="flex flex-col text-left relative">
          <h1 className="text-green text-7xl font-black max-w-[30vw] ">Fullstack Developer</h1>

          <span className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt <br />
            ut labore et dolore magna aliqua.
          </span>
        </div>

        <Photo />
      </div>
      <div className="text-green py-0 px-[12vw] px-16 mt-32 md:mt-12">
        <ul className="flex md:text-lg w-full sm:w-3/6 md:text-2xl text-lg">
          <li className="md:mr-3 mr-6">
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
