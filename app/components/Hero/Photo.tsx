import Image from "next/image";

interface IPhoto {
  fillSvg?: string;
  strokeSvg?: string;
}
const Photo = ({ fillSvg, strokeSvg }: IPhoto) => {
  return (
    <div className="relative w-[20rem] sm:w-[23rem] h-[20rem] sm:h-[24rem] rounded-full overflow-hidden mx-auto">
      <Image
        src="/marlon.jpeg"
        alt="Marlon Savian - Software Engineer"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 20rem, 23rem"
      />
    </div>
  );
};

export default Photo;
