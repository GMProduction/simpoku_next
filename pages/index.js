import Head from "next/head";
import Navbars from "../components/Navbar";
import Hero from "../components/Hero";
import TempText from "../components/temp-text";
import { FiArrowRightCircle } from "react-icons/fi";
export default function Home() {

  return (
    <div >
      <Navbars />
      <div>
        <Head> 
          <title>Simpoku: Simposium Terlengkap di Indonesia</title>
          <meta name="description" content="Simposium Terlengkap di Indonesia" />
          <link rel="icon" href="/simpoku_icon.ico" />
        </Head>

        <Hero heading="Simpoku" message="Simposium terlengkap di Indonesia!" />
        <div className="h-screen"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 container mx-auto" >
        <div>
        
          <TempText judul={"Judul"} color="bg-red" kelas={'flex justify-center items-center bg-red-900 min-w-14 h-14 w-14  rounded-full mr-8'}  isi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"  icon={<FiArrowRightCircle size={30} className='w-[100%]' width={'100%'} color="white"  /> }></TempText>
        </div>
        <div>
          <TempText  ></TempText>
        </div>

        <div>
          <TempText  ></TempText>
        </div>
      </div>
      {/* <Footer /> */}
    </div>

  );
}
