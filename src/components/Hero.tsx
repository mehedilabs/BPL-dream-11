
import cricketImage from "../assets/banner-main.png"

const Hero = () => {
  return (
    <section className="mx-auto mt-4 max-w-\[1400px\] px-8">
      <div
        className="
          relative
          min-h-[550px]
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-r
          from-[#02080c]
          via-[#111b21]
          to-[#b8a0ad]
        "
      >
        {/* Blue glow */}
        <div className="absolute bottom-[-120px] left-[-80px] h-[350px] w-[500px] rounded-full bg-blue-500/30 blur-[100px]" />

        {/* Cricket image */}
        <div className="relative z-10 flex justify-center pt-16">
          <img
            src={cricketImage}
            alt="Cricket"
            className="h-[190px] w-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="mt-6 text-xl font-medium text-gray-200">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button
            className="
              mt-7
              rounded-xl
              border-[3px]
              border-lime-300
              bg-lime-400
              px-8
              py-4
              text-lg
              font-bold
              text-gray-800
              shadow-[0_0_15px_rgba(163,230,53,0.5)]
              transition
              hover:scale-105
              hover:bg-lime-300
            "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;