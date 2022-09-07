import React from "react";
import Image from "next/image";

const Hero = ({ heading, message }) => {
  return (
    <div className="relative items-center justify-center  heroHeight bg-center bg-cover w-[100%]" S>
      {/* OVERLAY */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/> */}
      
      <div className="absolute 2xl:right-[100px] 2xl:top-[100px] 2xl:w-[1000px] 2xl:h-[700px] right-[50px] top-[30px] w-[500px] h-[300px] hidden sm:block">
        <Image
          src={"/local-images/simposium.png"}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute bottom-[100px] left-[50px] w-[100%]  sm:left-[100px] md:w-[70%] lg:w-[600px]">
        <h2 className="text-6xl font-bold" >{heading}</h2>
        <p className="text-4xl mt-3" >{message}</p>
        <button className="py-3 px-7 mt-5 bg-primaryC text-white rounded-full font-bold">Cari Simposium</button>
      </div>
    </div>
  );
};
export default Hero;
