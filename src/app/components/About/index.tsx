import Photo from "./Photo";
import Title from "./Title";

const About: React.FC = () => {
  return (
    <section className="flex flex-col sm:items-center justify-center sm:bg-about bg-blue pb-0 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-row items-center mt-52 py-0 px-16 sm:px-40 justify-between w-full max-w-screen-2xl	2xl:max-w-[1700px]">
        <div className="flex flex-col text-left relative">
          <Title />

          <span className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt <br />
            ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className="hidden sm:block">
          <Photo />
        </div>
      </div>
      <div className="text-green py-0 px-16 sm:px-40 mt-32 md:mt-12 mb-16 sm:mb-0">
        <ul className="flex md:text-lg w-full sm:w-3/6 md:text-2xl text-lg">
          <li className="md:mr-3 mr-6">
            Highly skilled at progressive enhancement, design systems &amp; UI Engineering.
          </li>
          <li>
            Over a decade of experience building products for clients across several countries.
          </li>
        </ul>
      </div>
      <div className="block sm:hidden flex items-center justify-center pt-32 pb-20 bg-green">
        <Photo fillSvg="blue" strokeSvg="blue" />
      </div>
    </section>
  );
};

export default About;
