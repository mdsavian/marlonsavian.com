import Photo from "./Photo";
import SubTitle from "./Subtitle";
import Title from "./Title";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue pb-12 md:pb-32 w-full relative z-[-5] min-h-screen">
      <div className="flex flex-col items-center py-0 px-16 w-full max-w-screen-2xl 2xl:max-w-[1700px] text-center">
        <div className="mb-8">
          <Photo />
        </div>
        
        <Title />
        
        <div className="mt-8">
          <SubTitle />
        </div>
      </div>
    </section>
  );
};

export default Hero;
