import PhotoShapes from "@/assets/photo-shapes.svg";
import Photo from "./Photo";

const About: React.FC = () => {
  return (
    <section className="sm:bg-about bg-blue pb-0 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-row items-center mt-52 py-0 px-[12vw] px-16 justify-between">
        <div className="flex flex-col text-left relative">
          <h1 className="text-green text-7xl font-black max-w-[30vw] ">Fullstack Developer</h1>

          <span className="text-white mt-8 text-2xl md:text-xl md:max-w-2xl sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt <br />
            ut labore et dolore magna aliqua.
          </span>
        </div>

        <figure className="hidden sm:block w-[23rem] h-[24rem] mr-20 2xl:mr-[15rem] relative border-[0.115rem] border-solid border-white ">
          <PhotoShapes className="top-[-25%] w-[40rem] h-[126%] right-[-5.4rem] absolute z-[-1]" />
          <span
            className="block mt-[-2.4rem] bg-white bg-cover ml-[-2.2rem]"
            aria-label="marlon photo"
            style={{
              width: "inherit",
              height: "inherit",
              backgroundPositionX: "center",
              backgroundImage: "url(marlon.jpeg)",
            }}
          />
        </figure>
      </div>
      <div className="text-green py-0 px-[12vw] px-16 mt-32 md:mt-12 mb-16 sm:mb-0">
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
        <figure className="relative w-[20rem] h-[20rem] border-[0.115rem] border-solid border-white z-[1] ml-[2.2rem]">
          <PhotoShapes
            fill="blue"
            stroke="blue"
            className="top-[-25%] w-[35rem] h-[126%] right-[-3.4rem] absolute z-[-1]"
          />
          <span
            className="block mt-[-2.4rem] bg-white bg-cover ml-[-2.2rem]"
            aria-label="marlon photo"
            style={{
              width: "inherit",
              height: "inherit",
              backgroundPositionX: "center",
              backgroundImage: "url(marlon.jpeg)",
            }}
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
