import Head from "next/head";
import Navbars from "../components/Navbar";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbars />
      <div>
        <Head>
          <title>Simpoku: Simposium Terlengkap di Indonesia</title>
          <meta
            name="description"
            content="Simposium Terlengkap di Indonesia"
          />
          <link rel="icon" href="/simpoku_icon.ico" />
        </Head>

        <Hero
          heading="Lorem Ipsum is simply dummy text of the printing "
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
      </div>

      <p className="text-center mt-[120px] text-3xl font-bold mb-5">
        Event Yang akan datang
      </p>

      <div className="relative container mx-auto bg-white min-h-[500px]  drop-shadow-xl rounded-2xl z-[2] mb-5 p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className=" bg-sky-300 min-h-[200px] rounded-2xl flex">
            <div className="h-[100%] w-[150px] relative overflow-hidden">
              <Image
                src={
                  "http://1.bp.blogspot.com/-WtWD2yIqUZM/VN_NatIWGqI/AAAAAAAAEwE/WwcuR-cF4cw/s1600/Pamflet%2B2nd%2BAnnouncement%2BNewest%2B(3).jpg"
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="bg-sky-300 min-h-[200px]">01</div>
          <div className="bg-sky-300 min-h-[200px]">01</div>
          <div className="bg-sky-300 min-h-[200px]">01</div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
