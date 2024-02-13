const Bottom = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue py-32 sm:pb-12 md:pb-32 relative py-0 px-16 sm:px-40 relative">
      <h1 className="text-green text-7xl font-black text-center">Get In Touch</h1>

      <span className="text-white mt-8 text-2xl md:text-xl text-center">
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        <br />
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </span>

      <a
        type="button"
        href="mailto:marlon.savian@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold text-center text-green hover:bg-green hover:text-white cursor-pointer bg-white py-2 px-8 rounded mt-8"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Bottom;
