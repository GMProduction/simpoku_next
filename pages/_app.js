import { Navbar } from "flowbite-react";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <div className="absolute w-[100%] h-[100%] overflow-hidden">

        <div className="absolute w-[400px] h-[750px] top-[-400px] left-[-150px] xl:w-[800px] xl:h-[1500px] xl:top-[-800px] xl:left-[-300px]">
          <Image
            src={"/local-images/blob2.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* <div className="absolute xl:w-[4000px] xl:h-[3000px] xl:top-[-1200px] xl:right-[-1700px] 
        md:w-[2000px] md:h-[1500px] md:top-[-600px] md:right-[-850px]
        w-[500px] h-[600px] top-[-200px] right-[-260px]
        ">
          <Image
            src={"/local-images/blob.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div> */}
      </div>

      <div className="h-[50px] bg-red hidden sm:block" />

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
