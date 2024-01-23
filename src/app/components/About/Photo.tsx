import PhotoShapes from "@/assets/photo-shapes.svg";

const Photo = () => {
  return (
    <figure className="hidden sm:block w-[23rem] h-[24rem] mr-20 2xl:mr-[15rem] relative border-[0.115rem] border-solid border-white ">
      <PhotoShapes className="top-[-25%] w-[40rem] h-[126%] right-[-5.4rem] absolute" />
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
