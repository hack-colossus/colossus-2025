"use client";
import Image from "next/image";

const Colosseum = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-sky-400 to-green-400">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-[backgroundMove_20s_linear_infinite]"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      ></div>

      {/* Colosseum Image */}
      <div className="absolute bottom-28 z-20 mx-auto w-[500px]">
        <Image
          src="/assets/logo.png"
          alt="Colosseum"
          width={500}
          height={500}
          className="w-full"
        />
      </div>

      {/* Ground */}
      {/* <div
        className="absolute bottom-0 w-full h-[150px] bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/ground.png')" }}
      ></div> */}

      {/* Clouds */}
      {/* <div className="absolute top-5 left-[-200px] w-[150px] h-[80px] bg-white opacity-80 rounded-full animate-[moveCloud1_20s_linear_infinite]"></div>
      <div className="absolute top-[100px] left-[-300px] w-[100px] h-[60px] bg-white opacity-80 rounded-full animate-[moveCloud2_25s_linear_infinite]"></div> */}

      {/* Bird */}
      {/* <div className="absolute top-10 left-[-100px] w-[40px] h-[20px] bg-black clip-path-[polygon(0%_50%,50%_0%,100%_50%,50%_100%)] animate-[fly_8s_linear_infinite]"></div>*/}

      <style jsx>{`
        @keyframes backgroundMove {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 100% 50%;
          }
        }

        @keyframes moveCloud1 {
          to {
            transform: translateX(110vw);
          }
        }

        @keyframes moveCloud2 {
          to {
            transform: translateX(120vw);
          }
        }

        @keyframes fly {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(50vw) translateY(-30px);
          }
          100% {
            transform: translateX(100vw) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Colosseum;
