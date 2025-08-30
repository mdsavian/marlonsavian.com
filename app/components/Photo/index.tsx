import Image from "next/image";

const Photo = (): React.ReactNode => {
  return (
    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-5.25V7h3l-4-4-4 4h3v6.75z" />
        </svg>
      </div>
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
