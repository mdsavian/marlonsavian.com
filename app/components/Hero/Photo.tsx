import Image from "next/image";

interface IPhoto {
  fillSvg?: string;
  strokeSvg?: string;
}
const Photo = ({ fillSvg, strokeSvg }: IPhoto) => {
  return (
    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
      <Image
        src="/marlon.jpeg"
        alt="Marlon Savian - Software Engineer"
        fill
        className="object-cover"
        priority
        sizes="200px"
      />
    </div>
  );
};

export default Photo;
