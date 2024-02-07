import Highlights from "./Highlights";
import Photo from "./Photo";
import SubTitle from "./Subtitle";
import Title from "./Title";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col sm:items-center justify-center sm:bg-about bg-blue pb-0 sm:pb-12 md:pb-32 w-full relative z-[-5]">
      <div className="flex flex-row items-center mt-52 py-0 px-16 sm:px-40 justify-between w-full max-w-screen-2xl 2xl:max-w-[1700px]">
        <div className="flex flex-col text-left relative">
          <Title />
          <SubTitle />
        </div>

        <div className="hidden sm:block">
          <Photo />
        </div>
      </div>

      <div className="text-green py-0 px-16 sm:px-40 mt-32 md:mt-12 mb-16 sm:mb-0 w-full max-w-screen-2xl 2xl:max-w-[1700px]">
        <Highlights />
      </div>

      <div className="block sm:hidden flex items-center justify-center pt-32 pb-20 bg-green">
        <Photo fillSvg="blue" strokeSvg="blue" />
      </div>
    </section>
  );
};

export default Hero;
