import Photo from "../Photo";

const ProfileSection = () => {
  return (
    <>
      <div className="mb-4">
        <Photo />
      </div>

      <h1 id="header-software-engineer" className="text-white text-[36px] font-bold text-center">
        Marlon Savian
      </h1>

      <p
        className="text-white text-[18px] max-w-[450px] text-center leading-relaxed mb-8"
        id="span-description"
      >
        A space for coding experiments, tech insights, and lessons learned.
      </p>
    </>
  );
};

export default ProfileSection;