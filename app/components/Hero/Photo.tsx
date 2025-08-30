import Image from "next/image";
import PhotoShapes from "@/assets/photo-shapes.svg";

interface IPhoto {
  fillSvg?: string;
  strokeSvg?: string;
}
const Photo = ({ fillSvg = "#94C100", strokeSvg = "#94C100" }: IPhoto) => {
  return (
    <figure className="relative w-[200px] h-[200px] border-2 border-white rounded-full overflow-hidden">
      <PhotoShapes
        className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] z-[-1]"
        fill={fillSvg}
        stroke={strokeSvg}
      />
      <div className="w-full h-full">
        <Image
          src="/marlon.jpeg"
          alt="Marlon Savian - Software Developer"
          fill
          className="object-cover"
          priority
          sizes="20rem"
        />
      </div>
    </figure>
  );
};

export default Photo;
