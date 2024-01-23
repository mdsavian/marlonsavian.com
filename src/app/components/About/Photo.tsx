import PhotoShapes from "@/assets/photo-shapes.svg";

interface IPhoto {
  fillSvg?: string;
  strokeSvg?: string;
}
const Photo = ({ fillSvg, strokeSvg }: IPhoto) => {
  return (
    <figure className="relative w-[20rem] sm:w-[23rem] h-[20rem] sm:h-[24rem] sm:mr-20 2xl:mr-[15rem] z-[1] ml-[2.2rem] sm:ml-0 border-[0.115rem] border-solid border-white">
      <PhotoShapes
        className="absolute top-[-25%] w-[35rem] sm:w-[40rem] h-[126%] right-[-3.4rem] sm:right-[-5.4rem] z-[-1]"
        fill={fillSvg}
        stroke={strokeSvg}
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
  );
};

export default Photo;
